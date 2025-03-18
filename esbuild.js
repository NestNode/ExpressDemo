const { build } = require('esbuild');

build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist/esbuild',
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node22',
  external: ['express'],
}).catch(() => process.exit(1));
