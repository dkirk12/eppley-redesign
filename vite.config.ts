import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Eppley React site.
// The base is set to './' so that the build can be served from any location (e.g. file system).
export default defineConfig({
  plugins: [react()],
  base: './',
});