import json
import html
import re
from pathlib import Path
from urllib.parse import urlparse

import time

import requests
from bs4 import BeautifulSoup

SOURCE_MAP = {
    'automatic-solar-tracker': 'https://web.archive.org/web/20250427104838/http://www.eppleylab.com/instrument-list/automatic-solar-tracker/',
    'black-white-pyranometer': 'https://web.archive.org/web/20250512205658/http://www.eppleylab.com/instrument-list/black-white-pyranometer/',
    'global-precision-pyranometer': 'https://web.archive.org/web/20250512210633/http://www.eppleylab.com/instrument-list/global-precision-pyranometer/',
    'normal-incidence-pyrheliometer': 'https://web.archive.org/web/20250512212804/http://www.eppleylab.com/instrument-list/normal-incidence-pyrheliometer/',
    'precision-infared-radiometer': 'https://web.archive.org/web/20250512213755/http://www.eppleylab.com/instrument-list/precision-infared-radiometer/',
    'standard-precision-pyranometer': 'https://web.archive.org/web/20250512214552/http://www.eppleylab.com/instrument-list/standard-precision-pyranometer/',
    'shade-disk-kit': 'https://web.archive.org/web/20250512210107/http://www.eppleylab.com/instrument-list/shade-disk-kit/',
    'total-ultraviolet-radiometer': 'https://web.archive.org/web/20250512213258/http://www.eppleylab.com/instrument-list/total-ultraviolet-radiometer/',
    'ventilator': 'https://web.archive.org/web/20250512212804/http://www.eppleylab.com/instrument-list/ventilator/',
}
BASE_DIR = Path('.')
ASSET_DIR = BASE_DIR / 'public' / 'instruments'
DATASHEET_DIR = BASE_DIR / 'public' / 'datasheets'
ASSET_DIR.mkdir(parents=True, exist_ok=True)
DATASHEET_DIR.mkdir(parents=True, exist_ok=True)
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'}
ARCHIVE_IMAGE_HEADERS = {
    'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
    'User-Agent': 'Mozilla/5.0 (compatible; EppleyAssetFetcher/1.0)'
}


def normalize_url(url: str) -> str:
    if not url:
        return ''
    url = url.strip()
    if url.startswith('//'):
        return 'https:' + url
    return url


def ensure_archive_image_url(url: str) -> str:
    if not url or 'web.archive.org' not in url or 'im_/' in url or 'id_/' in url:
        return url
    return re.sub(r'(/web/\d+)(?=/)', r'\1im_', url, count=1)


def fetch_html_document(slug: str) -> str:
    url = SOURCE_MAP.get(slug)
    if not url:
        raise KeyError(f'No source URL configured for {slug}')

    def _try(target_url: str) -> str:
        resp = requests.get(target_url, timeout=120)
        resp.raise_for_status()
        resp.encoding = resp.apparent_encoding or 'utf-8'
        return resp.text

    try:
        return _try(url)
    except requests.exceptions.RequestException as exc:
        parsed = urlparse(url)
        if parsed.scheme == 'https' and parsed.netloc == 'web.archive.org':
            fallback = url.replace('https://', 'http://', 1)
            return _try(fallback)
        raise exc


def download_file(url: str, dest: Path):
    if not url or dest.exists():
        return

    suffix = dest.suffix.lower()
    parsed = urlparse(url)
    download_url = url
    headers = None

    if suffix in IMAGE_EXTENSIONS:
        download_url = ensure_archive_image_url(url)
    if parsed.netloc == 'web.archive.org' and suffix in IMAGE_EXTENSIONS:
        headers = ARCHIVE_IMAGE_HEADERS

    def _try(target_url: str):
        resp = requests.get(target_url, timeout=120, headers=headers)
        resp.raise_for_status()
        dest.write_bytes(resp.content)

    try:
        _try(download_url)
    except requests.exceptions.RequestException as exc:
        parsed = urlparse(download_url)
        if parsed.scheme == 'https' and parsed.netloc == 'web.archive.org':
            fallback = download_url.replace('https://', 'http://', 1)
            _try(fallback)
        else:
            raise exc


def clean_html(html_text: str) -> str:
    if not html_text:
        return ''
    return html.unescape(html_text.strip())


def parse_spec_tables(container):
    tables = []
    if not container:
        return tables
    for table in container.select('table'):
        heading = None
        rows = []
        for tr in table.select('tr'):
            cells = tr.find_all(['td', 'th'])
            if not cells:
                continue
            cell_html = [clean_html(c.decode_contents()) for c in cells]
            if len(cells) == 1:
                text = cell_html[0]
                if heading is None and (cells[0].has_attr('colspan') or cells[0].find(['strong', 'b'])):
                    heading = BeautifulSoup(text, 'lxml').get_text(' ', strip=True)
                else:
                    rows.append({'labelHtml': '', 'valueHtml': text})
            else:
                label = cell_html[0]
                value = ''.join(cell_html[1:])
                rows.append({'labelHtml': label, 'valueHtml': value})
        tables.append({'title': heading, 'rows': rows})
    return tables


def first_paragraph_text(container):
    if not container:
        return ''
    for p in container.find_all('p'):
        text = p.get_text(' ', strip=True)
        if text:
            return html.unescape(text)
    return ''


def parse_gallery(content, slug):
    gallery = []
    for idx, item in enumerate(content.select('div.et_pb_gallery_item')):
        link = item.find('a')
        img = item.find('img')
        caption_el = item.find('p', class_='et_pb_gallery_caption')
        source_url = normalize_url(img['src']) if img else normalize_url(link['href']) if link else ''
        source_url = ensure_archive_image_url(source_url)
        caption = caption_el.get_text(' ', strip=True) if caption_el else ''
        caption = html.unescape(caption) if caption else ''
        ext = Path(urlparse(source_url).path).suffix or '.jpg'
        filename = f"{slug}-gallery-{idx+1}{ext}"
        local_path = ASSET_DIR / filename
        download_file(source_url, local_path)
        gallery.append({
            'image': f"/instruments/{filename}",
            'caption': caption,
        })
    return gallery


def parse_hero_image(content, slug):
    hero = content.select_one('div.et_pb_image img')
    gallery_items = content.select('div.et_pb_gallery_item')
    if hero:
        url = ensure_archive_image_url(normalize_url(hero.get('src')))
        ext = Path(urlparse(url).path).suffix or '.jpg'
        filename = f"{slug}-hero{ext}"
        download_file(url, ASSET_DIR / filename)
        return {
            'image': f"/instruments/{filename}",
            'alt': html.unescape(hero.get('alt') or ''),
        }
    elif gallery_items:
        first = gallery_items[0]
        link = first.find('a')
        img = first.find('img')
        raw_url = normalize_url(img['src']) if img else normalize_url(link['href']) if link else ''
        url = ensure_archive_image_url(raw_url)
        ext = Path(urlparse(url).path).suffix or '.jpg'
        filename = f"{slug}-hero{ext}"
        download_file(url, ASSET_DIR / filename)
        caption_el = first.find('p', class_='et_pb_gallery_caption')
        return {
            'image': f"/instruments/{filename}",
            'alt': html.unescape(caption_el.get_text(' ', strip=True)) if caption_el else '',
        }
    return None


def parse_datasheet(container, slug):
    if not container:
        return None
    link = container.select_one('a.callout')
    if not link:
        return None
    url = normalize_url(link.get('href'))
    ext = Path(urlparse(url).path).suffix or '.pdf'
    filename = Path(urlparse(url).path).name or f"{slug}{ext}"
    if not filename.lower().startswith(slug):
        filename = f"{slug}-{filename}"
    local_path = DATASHEET_DIR / filename
    download_file(url, local_path)
    return {
        'label': html.unescape(link.get_text(' ', strip=True)),
        'file': f"/datasheets/{filename}",
    }


def parse_page(slug):
    html_doc = fetch_html_document(slug)
    soup = BeautifulSoup(html_doc, 'lxml')
    entry = soup.select_one('div.entry-content')
    if not entry:
        raise RuntimeError(f'Missing entry content for {slug}')
    title_el = entry.select_one('h1.entry-title')
    name = title_el.get_text(strip=True) if title_el else slug.replace('-', ' ').title()
    desc_div = entry.select_one('.et_pb_text_0')
    spec_div = entry.select_one('.et_pb_text_1')
    description_html = clean_html(desc_div.decode_contents()) if desc_div else ''
    short_desc = first_paragraph_text(desc_div)
    datasheet = parse_datasheet(spec_div, slug)
    spec_tables = parse_spec_tables(spec_div)
    gallery = parse_gallery(entry, slug)
    hero = parse_hero_image(entry, slug)
    return {
        'name': name,
        'slug': slug,
        'shortDescription': short_desc,
        'descriptionHtml': description_html,
        'datasheet': datasheet,
        'specTables': spec_tables,
        'gallery': gallery,
        'heroImage': hero,
    }


def main():
    records = []
    for slug in SOURCE_MAP:
        print(f'Parsing {slug}...')
        records.append(parse_page(slug))
    output_path = BASE_DIR / 'src' / 'data' / 'instruments.json'
    output_path.write_text(json.dumps(records, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f'Wrote {output_path}')


if __name__ == '__main__':
    main()




