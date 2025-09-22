# Change Log

## Version 1 – Lightweight React Redesign (September 2025)

This project represents a clean, responsive React implementation of The Eppley Laboratory website. The design draws inspiration from iOS aesthetics with soft colors, rounded cards and a neutral background while retaining the original corporate yellow accent (`#ffd64f`).

### Major Changes

* **New Technology Stack** – Replaced the WordPress/Divi implementation archived via the Wayback Machine with a modern React single‑page application. Navigation is handled by React Router and styling uses a simple CSS module rather than a heavy theme.
* **Hero Imagery** – The original home page hero photos have been removed. In their place is an abstract illustration generated specifically for this project, symbolising solar energy and measurement.
* **Simplified Navigation** – A streamlined header now lists the key sections: Home, History, Instruments, Solar Radiation, Applications and Calibrations. Dropdowns and WordPress menu structures have been removed for clarity.
* **Card‑Based Layout** – Content on the home page and applications page is presented in reusable card components, offering a clean overview and quick access to detailed pages.
* **Rewritten Copy** – Non‑technical content has been rewritten for concision and clarity while retaining key facts. For example, the solar radiation section summarises the electromagnetic spectrum and solar constant【395161079109363†screenshot】.
* **Instrument Pages** – Each instrument now has its own detail page with a short overview, extended description and a list of features. Because the original site’s detailed specifications were inaccessible, these descriptions are paraphrased from general knowledge of the instruments’ functions.
* **Responsive Design** – The new layout adapts gracefully from mobile to desktop screens using CSS grid and flexible units.
* **Contact and Calibration Form** – A simple contact form allows users to submit calibration requests. In lieu of server‑side handling, the form alerts visitors to call or email the laboratory.

### Retained Elements

* **Colour Palette** – The signature yellow accent from the original site has been preserved across buttons, links and highlights.
* **Historical Context** – Captain Marion Eppley’s founding of the laboratory in 1917 and subsequent milestones are highlighted on the history page.
* **Instrumentation Focus** – All instrument names from the original navigation are retained. Where available, images from the archived site (e.g. the Shade Disk Kit) have been reused. Other instruments currently display generic images or none.

### Removed or Deprecated

* **Wayback‑Specific Assets** – All references to the Wayback Machine, timestamped asset folders and archived headers have been removed. The new project relies exclusively on local assets.
* **Home Page Photos** – The original photographs (e.g., home‑banner.jpg) from the archived site have been omitted per the project requirements.
* **Unused WordPress and Divi Code** – PHP templates, WordPress plugins and Divi theme files have been discarded. The codebase now contains only the assets and components required for a static React build.

---

This change log documents the initial release of the redesigned site. Future versions may incorporate additional content, refined styling or integrations based on user feedback.