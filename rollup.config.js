import { dirname } from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const plugins = [
  resolve(),
  commonjs({ include: /node_modules/ }),
  babel({
    configFile: './babel.config.js',
    only: ['./source'],
    runtimeHelpers: true,
    sourceMaps: 'inline'
  })
]

const config = [
  {
    input: [
      './source/index.js',
      './source/blend.js',
      './source/blendAlpha.js',
      './source/hexBlend.js',
      './source/hexToRgba.js',
      './source/hexToRgbaCss.js',
      './source/parse.js',
      './source/parseRgba.js',
      './source/rgbaCssBlend.js',
      './source/rgbaCssToHex.js',
      './source/rgbaToHex.js',
      './source/rgbaToRgbaCss.js'
    ],
    output: [
      {
        dir: dirname(pkg.module),
        exports: 'named',
        format: 'esm',
        name: 'hex-esm',
        sourcemap: true
      },
      {
        dir: dirname(pkg.main),
        exports: 'named',
        format: 'cjs',
        name: 'hex-cjs',
        sourcemap: true
      }
    ],
    plugins
  },
  {
    input: './source/index.js',
    output: [
      {
        file: pkg.browser,
        exports: 'named',
        format: 'umd',
        name: 'hex-umd',
        sourcemap: true
      }
    ],
    plugins
  }
]

export default config
