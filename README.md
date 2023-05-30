# Alert

`<auro-alert>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of illustrating alert messages to Alaska customers.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-alert/testPublish.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-alert/actions/workflows/testPublish.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-alert?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-alert)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-alert?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @aurodesignsystem/auro-alert
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-alert>` component.

```javascript
import "@aurodesignsystem/auro-alert";
```

**Reference component in HTML**

Default `auro-alert`

```html
<auro-alert type="error">Departing flight AS 1066 cannot accommodate any ... </auro-alert>

<auro-alert type="warning">Departing flight AS 1066 cannot accommodate any ... </auro-alert>

<auro-alert type="information">Departing flight AS 1066 cannot accommodate any ... </auro-alert>

<auro-alert type="success">Updates to your flight AS 1066 have been saved. </auro-alert>
```

`auro-alert` with nested content/components

```html
<auro-alert type="information">
  <p>For your child's safety, unaccompanied minors aged 8-17 can only fly on Alaska Airlines flights departing between 5:00 AM and 9:00 PM. <auro-hyperlink href="/children-travel">Rules for children traveling alone.</auro-hyperlink></p>
  <p>We searched for all Seattle Area, WA airports. Be sure to note which airport is being used.</p>
  <p>We searched for all Bay Area, CA airports. Be sure to note which airport is being used.</p>
</auro-alert>
```

## CDN Use

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

### Install
Include the following example HTML code in the `<head>` element of your page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-alert@latest/dist/auro-alert__bundled.js" type="module"></script>
```

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

### CDN options

Both [Unpkg](https://www.unpkg.com/) and [JSDelivr](https://www.jsdelivr.com/) are free open source options that you can use. These are 3rd party resources and Auro is not responsible for their uptime. **Use at your own risk.** These bundle resources are included with the npm package, you are free to use any CDN resource that fits your needs.

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open two different shell sessions. One is for the **npm tasks**, the second is to run the **server**.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:8000](http://localhost:8000/)

### API generation

The custom element API file is generated in the build and committed back to the repo with a version change. If the API doc has changed without a version change, author's are to run `npm run build:api` to generate the doc and commit to version control.

### Testing

Automated tests are required for every Auro component. See `.\test\auro-alert.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

### Bundled assets

Bundled assets are only generated in the remote and not merged back to this repo. To review and/or test a bundled asset locally, run `$ npm run bundler` to generate assets.

### Demo deployment

To deploy a demo version of the component for review, run `npm run demo:build` to create a `./build` directory that can be pushed to any static server.

<small>Built from WC-Generator v3.6.2</small>
