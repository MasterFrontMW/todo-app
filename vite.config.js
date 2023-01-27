import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
  publicDir: 'public',
  root: './src',
});
