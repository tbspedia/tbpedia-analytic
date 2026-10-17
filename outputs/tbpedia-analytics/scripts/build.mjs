import { build } from 'esbuild';
import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist/plugin', { recursive: true });
await build({ entryPoints: ['plugin/main.ts'], outfile: 'dist/plugin/main.js', bundle: true, platform: 'browser', format: 'cjs', target: 'es2022', external: ['obsidian'], sourcemap: false });
await copyFile('plugin/manifest.json', 'dist/plugin/manifest.json');
await copyFile('plugin/styles.css', 'dist/plugin/styles.css');
await build({ entryPoints: ['worker/src/index.ts'], outfile: 'dist/worker.js', bundle: true, platform: 'browser', format: 'esm', target: 'es2022', sourcemap: false, minify: true });
console.log('Built Obsidian plugin and Cloudflare Worker.');
