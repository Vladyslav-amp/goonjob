// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./public/blocks/main.scss";` // jeśli masz jakieś globalne zmienne SCSS
      }
    }
  }
});
