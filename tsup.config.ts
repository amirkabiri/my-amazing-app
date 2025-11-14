import { defineConfig } from 'tsup';
import packageJson from './package.json';

export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['cjs'],
  shims: true,
  clean: true,
  minify: true,
  noExternal: Object.keys(packageJson.dependencies),
});
