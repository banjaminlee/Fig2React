import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const external = Object.keys(pkg.devDependencies);

process.env.BABEL_ENV = 'production';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      name: 'index',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      babelHelpers: 'inline',
      exclude: 'node_modules/**',
      extensions,
      include: extensions.map((ext) => `src/**/*${ext}`),
      presets: ['@babel/preset-react'],
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss(),
    image(),
    json(),
    terser(),
    del({ targets: 'dist/*' }),
    url(),
    svgr(),
  ],
  external,
};
