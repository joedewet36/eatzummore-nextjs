import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ["./lib/**", "./story/**", "./App.tsx", "**/__tests__/**"],
      }),
      terser(),
      image(),
      copy({
        targets: [
          { src: 'assets/avatar_default.png', dest: 'lib/assets' },
        ]
      })
    ],
    external: [...Object.keys(packageJson.peerDependencies || {})],
  },
  {
    input: 'lib/types/index.d.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
