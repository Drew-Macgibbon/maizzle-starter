<div align="center">
  <p>
    <a href="https://maizzle.com" target="_blank">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/maizzle/maizzle/raw/master/.github/logo-dark.svg">
        <img alt="Maizzle Starter" src="https://github.com/maizzle/maizzle/raw/master/.github/logo-light.svg" width="300" height="225" style="max-width: 100%;">
      </picture>
    </a>
  </p>
  <p>Quickly build HTML emails with utility-first CSS</p>
<div>

  [![Version][npm-version-shield]][npm]
  [![Build][github-ci-shield]][github-ci]
  [![Downloads][npm-stats-shield]][npm-stats]
  [![License][license-shield]][license]

  </div>
</div>

## Learnings:


- for liquid support in vsCode "emmet.includeLanguages": { "liquid": "html" },
- `<component></component>` does not allow self-closing
- make sure to rebuild dev server if you change any of the data or config files
- nested folders in the templates folder will break the asset imports
- Passing ignored variables to components needs to follow this syntax:  ``@{{ name | fallback: 'friend' }}``
- For some reason it seems to only work in ``components`` if I include escaped variables  ``@{{ name | fallback: 'friend' }}`` within the ``<raw>`` element


## Checking emails

- https://www.mail-tester.com/
- https://www.caniemail.com/
- https://www.emailonacid.com/
- https://litmus.com/
- https://alter.email/
- https://putsmail.com/tests/new




## Getting Started

Clone this starter:

```bash
npx degit maizzle/maizzle my-project
```

Install dependencies:

```
cd my-project

npm install
```

Start local development:

```
npm run dev
```

Build emails for production:

```
npm run build
```

## Documentation

Maizzle documentation is available at https://maizzle.com

## Issues

Please open all issues in the [framework repository](https://github.com/maizzle/framework).

## License

The Maizzle framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

[npm]: https://www.npmjs.com/package/@maizzle/framework
[npm-stats]: https://npm-stat.com/charts.html?package=%40maizzle%2Fframework&from=2019-03-27
[npm-version-shield]: https://img.shields.io/npm/v/@maizzle/framework.svg
[npm-stats-shield]: https://img.shields.io/npm/dt/@maizzle/framework.svg?color=6875f5
[github-ci]: https://github.com/maizzle/framework/actions
[github-ci-shield]: https://github.com/maizzle/framework/actions/workflows/nodejs.yml/badge.svg
[license]: ./LICENSE
[license-shield]: https://img.shields.io/npm/l/@maizzle/framework.svg?color=0e9f6e
