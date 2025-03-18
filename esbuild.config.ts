import { build } from 'esbuild';

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/index.js',
  target: 'node20',
  external: ['express'],
}).catch(() => process.exit(1));
