import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ExpressApp',
      fileName: 'index',
      formats: ['cjs'],
    },
    outDir: 'dist/vite/',
  },
});
