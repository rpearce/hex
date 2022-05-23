# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2022-05-23
* fixes bug with `hexToRgbaCss` when passed an alpha of 0

## [1.0.1] - 2020-08-29

### Fixed
* `tslib` wasn't included in dependencies
* function types weren't being exported

## [1.0.0] - 2020-03-15

### Added
* typescript support
* other bundles (minified CJS, minified UMD)

### Changed
* license from ISC to BSD-3

### Fixed
* security vulnerabilities from dependencies

### Removed
* `browser` entry point

## [0.3.1] - 2019-12-29

### Changed
* upgrade yarn.lock for security issues

## [0.3.0] - 2019-12-29

### Changed
* different `main` and `module` build outputs
* now including `umd` build
* now exposing all modules in output for individual importing
* security fixes
* better README docs

## [0.2.4] - 2019-09-10

### Changed
* security fixes for `mixin-deep` and `lodash.merge`

## [0.2.3] - 2019-09-09

### Changed
* bumped `devDependencies` & better dev tooling
* using `dist/` instead of `src/` now for build output
* now building with `rollup`
* now building commonjs & ESM files in `dist/` folder

## [0.2.2] - 2019-03-04

### Fixed
* bumped `devDependencies`
* moved `@babel-polyfill` to `devDependencies`
* set `"sideEffects": false` in `package.json`

## [0.2.1] - 2019-01-21

### Fixed
- Updated `package.json` package info. Nothing to see here...

## [0.2.0] - 2019-01-21

### Added
Added the following functions:
* `blend`
* `blendAlpha`
* `hexBlend`
* `parseRgba`
* `rgbaCssBlend`
* `rgbaCssToHex`
* `rgbaToHex`
* `rgbaToRgbaCss`

## [0.1.0] - 2019-01-11

### Added
* Added all the things
