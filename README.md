<h1 align="center">
    Embroider Template
</h1>
<div align="center">
    <a href="https://spdx.org/licenses/MITNFA.html"><img src="https://img.shields.io/badge/License-MIT%20%2Bno--false--attribs-blue" /></a>
    <a href="https://github.com/twyr/embroider-template/blob/main/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg" /></a>
</div>
<hr />

<div align="center">
    <a href="https://emberjs.com">Ember 4.0+</a> and <a href="">Embroider</a> template repository
</div>
<div align="center">
    Built as part of the <a href="https://github.com/twyr">Twy&apos;r</a> effort by <a href="https://github.com/shadyvd">Vish Desai</a> and <a href="https://github.com/twyr/embroider-template/graphs/contributors">contributors</a>
</div>
<hr />

#### TABLE OF CONTENTS

-   [About](#about)
-   [Status](#status)
-   [Why](#why)
-   [Goals](#goals)
-   [Contributing](#contributing)
    -   [Code of Conduct](#code-of-conduct)
    -   [Developing](#developing)
    -   [Contributors](#contributors)
-   [License](#license)

#### ABOUT

This is a monorepo used as a template for creating [Ember](https://emberjs.com) addons using [Embroider](https://github.com/embroider-build/embroider) in the V2 format.
It consists of two packages - the Basic Addon itself, and an Ember App for testing, debugging, documenting, and showcasing the addon.

#### STATUS

| Category       | Status                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conventions    | [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg)](https://conventionalcommits.org) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)                                                                                                                               |
| Code Stats     | [![Languages](https://badgen.net/lgtm/langs/g/twyr/embroider-template)](https://lgtm.com/projects/g/twyr/embroider-template) ![GitHub repo size](https://img.shields.io/github/repo-size/twyr/embroider-template) [![LoC](https://badgen.net/lgtm/lines/g/twyr/embroider-template)](https://lgtm.com/projects/g/twyr/embroider-template) [![Language grade](https://badgen.net/lgtm/grade/g/twyr/embroider-template)](https://lgtm.com/projects/g/twyr/embroider-template/context:javascript) [![Coverage Status](https://coveralls.io/repos/github/twyr/embroider-template/badge.svg?branch=main)](https://coveralls.io/github/twyr/embroider-template?branch=main) |
| Security       | [![Known Vulnerabilities](https://snyk.io/test/github/twyr/embroider-template/badge.svg?targetFile=package.json)](https://snyk.io/test/github/twyr/embroider-template?targetFile=package.json) [![Total alerts](https://img.shields.io/lgtm/alerts/g/twyr/embroider-template.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/twyr/embroider-template/alerts/) ![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@twyr/embroider-addon)                                                                                                                                                |
|                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Development    | ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/twyr/embroider-template) ![GitHub last commit](https://img.shields.io/github/last-commit/twyr/embroider-template)                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Issues & PRs   | ![GitHub open issues](https://img.shields.io/github/issues-raw/twyr/embroider-template) ![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/twyr/embroider-template) ![GitHub open prs](https://img.shields.io/github/issues-pr-raw/twyr/embroider-template) ![GitHub closed prs](https://img.shields.io/github/issues-pr-closed-raw/twyr/embroider-template)                                                                                                                                                                                                                                                                                    |
|                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Release Status | ![GitHub package.json version](https://img.shields.io/github/package-json/v/twyr/embroider-template/main) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/twyr/embroider-template?sort=semver) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/twyr/embroider-template?sort=semver)                                                                                                                                                                                                                                                                                                                                      |
| Publish Status | ![node-current](https://img.shields.io/node/v/@twyr/embroider-addon) ![npm bundle size](https://badgen.net/bundlephobia/min/@twyr/embroider-addon) ![npm](https://img.shields.io/npm/dy/@twyr/embroider-addon)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### WHY

The Embroider build system gets default configurations for addons from _two_ different places:

1. The _options_ from the "main" / "build" file specified in the addon's [Ember Package Metadata](https://github.com/embroider-build/embroider/blob/main/SPEC.md#definitions)
1. The _config()_ function from the same "main" / "build" file

At App build time,these addon configurations are processed as:

1. The _options_ object - merged with the _@embroider/macros_ key specified in the "ember-cli-build.js" file of the app
1. The _config()_ return value - merged with the _config/environment.js_ file of the app

The merged configs are accessible / usable in diffferent places:

1. The merged _options_ object is available in the @embroider/macros artifacts - getConfig, getOwnConfig, etc.
1. The merged _config()_ return value is available in the "contentFor" hooks

This monorepo provides an _extremely trivial_ implementation of an addon / test-app pair that reads / uses a common configuration file
called [dual-build-config.js](./addons/embroider-app/config/dual-build-config.js).

#### GOALS

Ember-related goals:

1. Build for [Ember 4.0+](https://emberjs.com) - with no expectation of backward compatibility
1. Build using [Embroider](https://github.com/embroider-build/embroider) - aim for "Native Support"

Addon goals::Showcase how to effectively integrate with / consume the Embroider build system artifacts:

1. Use the [contentFor](https://github.com/embroider-build/embroider/blob/main/SPEC.md#contentfor) hooks to conditionally inject HTML at build time - based on config defined in [{{app}}/config/environment.js](./addons/embroider-app/config/environment.js)
1. Use the [@embroider/macros](https://github.com/embroider-build/embroider/tree/main/addons/macros#readme) capabilities to conditionally include/exclude artifacts - based on config defined in [{{app}}/ember-cli-build.js](./addons/embroider-app/ember-cli-build.js)

Developer Experience Goals::Provide a monorepo to be used as a template / jump-off point:

1. Should be trivial to clone / install / build / run and see how the classical / embroider build systems interact
1. Should be trivial to remove the artifacts exported by the example addon and add new ones
1. Should be trivial to use the new artifacts in the example app

#### CONTRIBUTING

##### Code of Conduct

All contributors to this project are expected to adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) specified.

##### Developing

Details on getting the code, setting up the development environment, and instructions on how to extend/build/test the code are detailed in the
[Contribution Guide](CONTRIBUTING.md)

##### Contributors

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

This project owes its existence to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://twyr.github.io"><img src="https://avatars1.githubusercontent.com/u/5027975?v=4" width="100px;" alt=""/><br /><sub><b>Vish Desai</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification. Contributions of any kind are welcome!

#### LICENSE

This project is licensed under the [MIT +no-false-attribs](https://spdx.org/licenses/MITNFA.html) license.
You may get a copy of the license by following the link, or at [LICENSE.md](LICENSE.md)
