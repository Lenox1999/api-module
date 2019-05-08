# api-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Groovy's official api-module

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add the `api-module` dependency with `yarn` or `npm` to your project
2. Add `api-module` to the `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    // Simple usage
    'api-module',

    // With options
    ['api-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Rxsto <oz@farfrom.social> (https://rxsto.me)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/api-module.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/api-module

[npm-downloads-src]: https://img.shields.io/npm/v/api-module/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/api-module

[circle-ci-src]: https://img.shields.io/circleci/project/github/.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/

[codecov-src]: https://img.shields.io/codecov/c/github/.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/

[david-dm-src]: https://david-dm.org//status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
