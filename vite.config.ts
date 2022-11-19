import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  plugins: [
    ViteEjsPlugin((viteConfig) => ({
      env: viteConfig.env,
    })),

    react(),
  ],
});
