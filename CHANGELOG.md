# Semantic Release Automated Changelog

## [4.1.1](https://github.com/AlaskaAirlines/auro-alert/compare/v4.1.0...v4.1.1) (2025-07-08)


### Bug Fixes

* update dependencies, restructure styles ([9a4ecec](https://github.com/AlaskaAirlines/auro-alert/commit/9a4ececf726024f589c4643808c704a42a4d909e))
* update docs head content ([25d66e2](https://github.com/AlaskaAirlines/auro-alert/commit/25d66e2da0c142a0cb1f5a443313627dfdf6dfe9))
* update typography to be themable via class ([8942624](https://github.com/AlaskaAirlines/auro-alert/commit/8942624224aa302d2a4a265393eb4a1b076ec84c))

# [4.1.0](https://github.com/AlaskaAirlines/auro-alert/compare/v4.0.1...v4.1.0) (2025-04-15)


### Features

* add new theme support [#95](https://github.com/AlaskaAirlines/auro-alert/issues/95) ([6c500dd](https://github.com/AlaskaAirlines/auro-alert/commit/6c500ddbcec925ae76e76a7b202549eb5772b00d))

## [4.0.1](https://github.com/AlaskaAirlines/auro-alert/compare/v4.0.0...v4.0.1) (2025-04-09)


### Performance Improvements

* add wca script for docs api ([6bbf4a3](https://github.com/AlaskaAirlines/auro-alert/commit/6bbf4a3d0c2e7a6f9e3efa128b3aba3d93ab902d))

# [4.0.0](https://github.com/AlaskaAirlines/auro-alert/compare/v3.3.1...v4.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([8689503](https://github.com/AlaskaAirlines/auro-alert/commit/8689503eeed69ec3e0735b624cd9d2d7c5cd6aec))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [3.3.1](https://github.com/AlaskaAirlines/auro-alert/compare/v3.3.0...v3.3.1) (2025-02-08)


### Performance Improvements

* update dependencies ([19234e4](https://github.com/AlaskaAirlines/auro-alert/commit/19234e439baa1ce1b54ded7f810da73f9ecb246b))

# [3.3.0](https://github.com/AlaskaAirlines/auro-alert/compare/v3.2.1...v3.3.0) (2025-02-08)


### Features

* update to use latest wcss ([587a5da](https://github.com/AlaskaAirlines/auro-alert/commit/587a5dab3a07391b523377a9a4cccd1e5c0a0409))

## [3.2.1](https://github.com/AlaskaAirlines/auro-alert/compare/v3.2.0...v3.2.1) (2024-12-21)


### Performance Improvements

* update node to version 22 ([c03ca18](https://github.com/AlaskaAirlines/auro-alert/commit/c03ca18671c9633c85b95af3fc1f1bbc9d1817a2))

# [3.2.0](https://github.com/AlaskaAirlines/auro-alert/compare/v3.1.3...v3.2.0) (2024-11-15)


### Features

* update auro-library to 3.0.1 ([71953c2](https://github.com/AlaskaAirlines/auro-alert/commit/71953c2bc5758a562fa58deb6895b4db49930ff6))


### Performance Improvements

* update library to 3.0.2 ([2fa870b](https://github.com/AlaskaAirlines/auro-alert/commit/2fa870b1d134472a4a25a5187a022dd1b81341f8))

## [3.1.3](https://github.com/AlaskaAirlines/auro-alert/compare/v3.1.2...v3.1.3) (2024-11-05)


### Performance Improvements

* update semantic-release assets [#80](https://github.com/AlaskaAirlines/auro-alert/issues/80) ([6cd79f7](https://github.com/AlaskaAirlines/auro-alert/commit/6cd79f75213275b7696b1350642f3c91e8fe1fd7))

## [3.1.2](https://github.com/AlaskaAirlines/auro-alert/compare/v3.1.1...v3.1.2) (2024-11-05)


### Bug Fixes

* update import and Sass var reference [#75](https://github.com/AlaskaAirlines/auro-alert/issues/75) ([25c6229](https://github.com/AlaskaAirlines/auro-alert/commit/25c6229395f08ff214c68164c8c3ac98fedea138))

## [3.1.1](https://github.com/AlaskaAirlines/auro-alert/compare/v3.1.0...v3.1.1) (2024-11-05)


### Bug Fixes

* address unresolved deps w/bundled assets [#77](https://github.com/AlaskaAirlines/auro-alert/issues/77) ([3bc9e88](https://github.com/AlaskaAirlines/auro-alert/commit/3bc9e880119b9b58e8a8a858dcbc8a6a79445e13))

# [3.1.0](https://github.com/AlaskaAirlines/auro-alert/compare/v3.0.2...v3.1.0) (2024-10-30)


### Bug Fixes

* set size of icon to lock it for this component [#71](https://github.com/AlaskaAirlines/auro-alert/issues/71) ([89001ff](https://github.com/AlaskaAirlines/auro-alert/commit/89001ffd2a058957afdae0ece0ee781304bfbcf7))


### Features

* **api:** add register static method [#70](https://github.com/AlaskaAirlines/auro-alert/issues/70) ([087f5cc](https://github.com/AlaskaAirlines/auro-alert/commit/087f5ccc2d0a5c028bb379b4e8ccee5facc8faf9))
* apply latest token ds-auro-icon-size [#69](https://github.com/AlaskaAirlines/auro-alert/issues/69) ([5a027c6](https://github.com/AlaskaAirlines/auro-alert/commit/5a027c6876ccc64ec0acc2583abc19029b30ebb7))
* update auro-icon package and icon size token applied [#69](https://github.com/AlaskaAirlines/auro-alert/issues/69) ([ecb4be5](https://github.com/AlaskaAirlines/auro-alert/commit/ecb4be5f721850f69c3f15a1887ae6468ba56c66))

## [3.0.2](https://github.com/AlaskaAirlines/auro-alert/compare/v3.0.1...v3.0.2) (2024-10-08)


### Bug Fixes

* moves auro library to dependencies in package.json [#67](https://github.com/AlaskaAirlines/auro-alert/issues/67) ([5a11e5c](https://github.com/AlaskaAirlines/auro-alert/commit/5a11e5c99bfdaafa9328b3687f6457078b07568b))

## [3.0.1](https://github.com/AlaskaAirlines/auro-alert/compare/v3.0.0...v3.0.1) (2024-10-04)


### Performance Improvements

* add missing theme docs ([42d5883](https://github.com/AlaskaAirlines/auro-alert/commit/42d588351ec11cec072c2a124591c6013dde9c76))

# [3.0.0](https://github.com/AlaskaAirlines/auro-alert/compare/v2.1.8...v3.0.0) (2024-09-30)


### Features

* add tag name as attribute when custom reigstered ([1d03bdd](https://github.com/AlaskaAirlines/auro-alert/commit/1d03bdd198387523f2c478602a773432a89032ea))
* **icon:** convert icons into auro-icons ([b890e39](https://github.com/AlaskaAirlines/auro-alert/commit/b890e391c8863212da83fcfd6c5c796d839df8be))
* refactor color styles using tier 3 tokens [#57](https://github.com/AlaskaAirlines/auro-alert/issues/57) ([e378540](https://github.com/AlaskaAirlines/auro-alert/commit/e3785407b65bd2504f858508a92e3211a414ce86))


### Performance Improvements

* refactor custom component registration config ([acd89e1](https://github.com/AlaskaAirlines/auro-alert/commit/acd89e14e4adb373518bc5798ef3431090ca4294))
* update dependencies ([50b6ec8](https://github.com/AlaskaAirlines/auro-alert/commit/50b6ec85f34a521b6d4711d946143e014757e9ea))
* update dependencies ([4700ecf](https://github.com/AlaskaAirlines/auro-alert/commit/4700ecffb75678b6b7b3c25a07bc808a0865133c))


### BREAKING CHANGES

* trigger major release for theming support #57

## [2.1.8](https://github.com/AlaskaAirlines/auro-alert/compare/v2.1.7...v2.1.8) (2024-05-15)


### Performance Improvements

* update deprecated icon ([3ca1d12](https://github.com/AlaskaAirlines/auro-alert/commit/3ca1d127cc0353e7b0165f3a6986a8ecfaa54767))

## [2.1.7](https://github.com/AlaskaAirlines/auro-alert/compare/v2.1.6...v2.1.7) (2024-02-13)


### Performance Improvements

* **demo:** update demo file name [#55](https://github.com/AlaskaAirlines/auro-alert/issues/55) ([f56db00](https://github.com/AlaskaAirlines/auro-alert/commit/f56db0098a5cdd3d1a1be5a9e65d3b752214598d))

## [2.1.6](https://github.com/AlaskaAirlines/auro-alert/compare/v2.1.5...v2.1.6) (2024-02-13)


### Performance Improvements

* update auro dependencies ([8ee6012](https://github.com/AlaskaAirlines/auro-alert/commit/8ee60124ed2b13319b0045f35a5d9b8067913c9e))

## [2.1.5](https://github.com/AlaskaAirlines/auro-alert/compare/v2.1.4...v2.1.5) (2024-02-11)


### Performance Improvements

* update for ESM/SSR support ([bbdcf23](https://github.com/AlaskaAirlines/auro-alert/commit/bbdcf23f32193616a9ce950b0ec9406683875524))

## [2.1.4](https://github.com/AlaskaAirlines/auro-alert/compare/v2.1.3...v2.1.4) (2024-02-08)


### Bug Fixes

* **readme:** remove readme additional info content ([0a63317](https://github.com/AlaskaAirlines/auro-alert/commit/0a63317b310dd423aae60db23fcd206ef32a771b))


### Performance Improvements

* **api:** add descriptions to api examples ([6ae281c](https://github.com/AlaskaAirlines/auro-alert/commit/6ae281cc82caa023ebe845a945846197827fab61))
* modernize documentation-related generator ([7e39712](https://github.com/AlaskaAirlines/auro-alert/commit/7e39712f0d5e2b56b84c82f1d2159da3b5c21c97))

## [2.1.3](https://github.com/AlaskaAirlines/auro-alert/compare/v2.1.2...v2.1.3) (2024-02-01)


### Performance Improvements

* update auro dependencies ([45834ce](https://github.com/AlaskaAirlines/auro-alert/commit/45834ce7aa3c7ed9e5de1d0b1136ac907c651120))

## [2.1.2](https://github.com/AlaskaAirlines/auro-alert/compare/v2.1.1...v2.1.2) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([7651b12](https://github.com/AlaskaAirlines/auro-alert/commit/7651b1218c89133f3cec792267e4b36c67377fd8))

## [2.1.1](https://github.com/AlaskaAirlines/auro-alert/compare/v2.1.0...v2.1.1) (2024-01-27)


### Performance Improvements

* update index per SSR support ([1f2e188](https://github.com/AlaskaAirlines/auro-alert/commit/1f2e188b29508170a6e5477a7f2bf0575e637d41))

# [2.1.0](https://github.com/AlaskaAirlines/auro-alert/compare/v2.0.8...v2.1.0) (2024-01-20)


### Features

* update to support SSR ([7443eac](https://github.com/AlaskaAirlines/auro-alert/commit/7443eac4f1130b0f63644e75b3996a8e67431879))

## [2.0.8](https://github.com/AlaskaAirlines/auro-alert/compare/v2.0.7...v2.0.8) (2023-11-10)


### Performance Improvements

* update to Node20 and related dependencies 46 ([6ae8043](https://github.com/AlaskaAirlines/auro-alert/commit/6ae80437edcc2380b528a1e654b6da4e1be6268b))

## [2.0.7](https://github.com/AlaskaAirlines/auro-alert/compare/v2.0.6...v2.0.7) (2023-11-06)


### Bug Fixes

* **ally:** import styles for ally functionality [#48](https://github.com/AlaskaAirlines/auro-alert/issues/48) ([5757f53](https://github.com/AlaskaAirlines/auro-alert/commit/5757f531a2dc6102bbbacd443e6517565ad28708))

## [2.0.6](https://github.com/AlaskaAirlines/auro-alert/compare/v2.0.5...v2.0.6) (2023-10-30)


### Performance Improvements

* **background:** update background color to white [#43](https://github.com/AlaskaAirlines/auro-alert/issues/43) ([23affd0](https://github.com/AlaskaAirlines/auro-alert/commit/23affd0e9cc42cddcd0f8fb9c28917c6a4a307bb))
* **tokens:** update tokens to use ds prefix ([b0d0bdb](https://github.com/AlaskaAirlines/auro-alert/commit/b0d0bdbe8b0b421d7c633b933023824c12a7ea91))

## [2.0.5](https://github.com/AlaskaAirlines/auro-alert/compare/v2.0.4...v2.0.5) (2023-07-25)


### Performance Improvements

* **npm:** update package build configs [#39](https://github.com/AlaskaAirlines/auro-alert/issues/39) ([70d1de0](https://github.com/AlaskaAirlines/auro-alert/commit/70d1de08f61d2bf0c1353ba9f92d16376e5c3bc0))

## [2.0.4](https://github.com/AlaskaAirlines/auro-alert/compare/v2.0.3...v2.0.4) (2023-06-29)


### Performance Improvements

* **deps:** remove unsed dependencies from project ([ab67636](https://github.com/AlaskaAirlines/auro-alert/commit/ab676369dfd3badb372c7077a4a30fc7f9e186b9))
* fix general feedback ([1c70c07](https://github.com/AlaskaAirlines/auro-alert/commit/1c70c0760758b8fef5ca561f6cf7af8e26125d2e))
* remove legacy es5 bundling resources [#31](https://github.com/AlaskaAirlines/auro-alert/issues/31) ([6c5b43a](https://github.com/AlaskaAirlines/auro-alert/commit/6c5b43a32e00c8ff705f07d6f91bf8af304f1ed6))
* update to Lit2.0, TS support, issue templates, component registration extension [#32](https://github.com/AlaskaAirlines/auro-alert/issues/32) and update all depedencies legacy [#34](https://github.com/AlaskaAirlines/auro-alert/issues/34) ([c52ee38](https://github.com/AlaskaAirlines/auro-alert/commit/c52ee38f3d269bcd4d4667a8d7de54616be3a2c7))
* update to node 18 [#33](https://github.com/AlaskaAirlines/auro-alert/issues/33) ([216ab80](https://github.com/AlaskaAirlines/auro-alert/commit/216ab8091b945d02b8632537055332655f661036))

## [2.0.3](https://github.com/AlaskaAirlines/auro-alert/compare/v2.0.2...v2.0.3) (2023-05-09)


### Performance Improvements

* **parts:** add css parts to alert and content [#28](https://github.com/AlaskaAirlines/auro-alert/issues/28) ([9da88bc](https://github.com/AlaskaAirlines/auro-alert/commit/9da88bc6c244b973f07f1b5e0c8e29a7678f197c))

## [2.0.2](https://github.com/AlaskaAirlines/auro-alert/compare/v2.0.1...v2.0.2) (2022-09-08)


### Bug Fixes

* **border:** set width to 1px [#24](https://github.com/AlaskaAirlines/auro-alert/issues/24) ([38333cb](https://github.com/AlaskaAirlines/auro-alert/commit/38333cbe74c907a9a223364c062b0b33bc9e44f1))

## [2.0.1](https://github.com/AlaskaAirlines/auro-alert/compare/v2.0.0...v2.0.1) (2021-07-13)


### Bug Fixes

* address post release issues ([a4920bf](https://github.com/AlaskaAirlines/auro-alert/commit/a4920bfd5dd99d2ff24506fc7c80e4063771da73))

# [2.0.0](https://github.com/AlaskaAirlines/auro-alert/compare/v1.4.2...v2.0.0) (2021-07-12)


### Features

* **api:** new type definition and CE name ([e520893](https://github.com/AlaskaAirlines/auro-alert/commit/e5208932bf52bb405eb653f1a31b4c8970e47aae))


### BREAKING CHANGES

* **api:** type is now a string, boolean type definitions removed

## [1.4.2](https://github.com/AlaskaAirlines/auro-alert/compare/v1.4.1...v1.4.2) (2021-04-20)


### Bug Fixes

* add reflection support for UI attributes ([cbcb9d6](https://github.com/AlaskaAirlines/auro-alert/commit/cbcb9d6aa9649f2f468d51b424d9c93c5e0693af))

## [1.4.1](https://github.com/AlaskaAirlines/auro-alert/compare/v1.4.0...v1.4.1) (2021-03-26)


### Bug Fixes

* remove focus-visible dependency ([3204a06](https://github.com/AlaskaAirlines/auro-alert/commit/3204a062b2a473178697f5e19cddb94247d025ee))

# [1.4.0](https://github.com/AlaskaAirlines/auro-alert/compare/v1.3.0...v1.4.0) (2021-02-20)


### Features

* add new success and noicon features ([7c59e89](https://github.com/AlaskaAirlines/auro-alert/commit/7c59e895b0db50dca218411361f9c887da859e38))

# [1.3.0](https://github.com/AlaskaAirlines/auro-alert/compare/v1.2.1...v1.3.0) (2021-02-12)


### Features

* add support for rollup bundle ([bf0e10c](https://github.com/AlaskaAirlines/auro-alert/commit/bf0e10c430c0908e6881f3e4292168090c69b0d7))

## [1.2.1](https://github.com/AlaskaAirlines/auro-alert/compare/v1.2.0...v1.2.1) (2020-12-03)


### Bug Fixes

* update dependency notification ([537d5e0](https://github.com/AlaskaAirlines/auro-alert/commit/537d5e007fd589bb14c17c67c6d2305c03c63abc))

# [1.2.0](https://github.com/AlaskaAirlines/auro-alert/compare/v1.1.2...v1.2.0) (2020-10-30)


### Features

* add fixed feature ([544fd83](https://github.com/AlaskaAirlines/auro-alert/commit/544fd83720e771976deabd38e92f5776fc06e962))

## [1.1.2](https://github.com/AlaskaAirlines/auro-alert/compare/v1.1.1...v1.1.2) (2020-10-23)


### Bug Fixes

* adjust text line-height ([e77913c](https://github.com/AlaskaAirlines/auro-alert/commit/e77913cdd36abc79d3467783e8d5e5ecd168678a))

## [1.1.1](https://github.com/AlaskaAirlines/auro-alert/compare/v1.1.0...v1.1.1) (2020-10-17)


### Bug Fixes

* increase right padding ([ee34259](https://github.com/AlaskaAirlines/auro-alert/commit/ee3425957f5ec6a20f9be21c9f9537aa8ff8cb49))

# [1.1.0](https://github.com/AlaskaAirlines/auro-alert/compare/v1.0.0...v1.1.0) (2020-08-25)


### Features

* move baseclass a11y features to depednency ([a18747e](https://github.com/AlaskaAirlines/auro-alert/commit/a18747e0e08490f4ecea4b68b5eae49ffbc4b23d))

# 1.0.0 (2020-08-17)


### Bug Fixes

* add 100% width to host for bundle version fix ([c2a7d1d](https://github.com/AlaskaAirlines/auro-alert/commit/c2a7d1d4933f0efebc03de5989a174658ab4b643))


### Features

* a11y props ([8f97a48](https://github.com/AlaskaAirlines/auro-alert/commit/8f97a488542cd4d62328420b31f0b800f5fdc2ae))
* add hidden attribute and aria alert role ([89da746](https://github.com/AlaskaAirlines/auro-alert/commit/89da746785a1c774afd310523afe26994dd06e82))
* break out into base class ([ea3a887](https://github.com/AlaskaAirlines/auro-alert/commit/ea3a887c7748c5f901961166765ede962ae3e040))
* initial build ([c37dd6d](https://github.com/AlaskaAirlines/auro-alert/commit/c37dd6d44a21943314638d3cbc816200e8274368))
