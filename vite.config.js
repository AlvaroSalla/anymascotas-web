/// <reference types="vite/client" />

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
