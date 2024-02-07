<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# alert

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
The `auro-alert` component renders errors, warnings, and other inline notifications with automated styling elements. Simply add the `type` attribute the corresponding value. If you need to present multiple lines in the same alert wrapper, use p tags for each line.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-alert use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `auro-alert` use cases include:

* Error messages
* Warning messages
* Informational messages
<!-- AURO-GENERATED-CONTENT:END -->

## auro-alert default use
The following illustrates the default use of the `auro-alert` element. Use the `title` and `subtitle` slots to add content to the lockup.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-alert>This is a default error with no error type specified.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-alert>This is a default error with no error type specified.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Single line alerts

### Error

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error.html -->
  <auro-alert type="error">Transaction failed.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error.html -->

```html
<auro-alert type="error">Transaction failed.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Warning

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/warning.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/warning.html -->
  <auro-alert type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/warning.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/warning.html -->

```html
<auro-alert type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Information

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/information.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/information.html -->
  <auro-alert type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/information.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/information.html -->

```html
<auro-alert type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Success

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/success.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/success.html -->
  <auro-alert type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/success.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/success.html -->

```html
<auro-alert type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Customize content

While Auro components, `auro-alert` included, come with a pre-defined UI opinion, another feature that is fully supported is a user's ability to customize any content in the slot. The following example illustrates how a user can completely customize the content in the `<slot>` of the element, while not needing to recreate the `auro-alert` UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom-content.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom-content.html -->
  <auro-alert type="information">
    <style>
      .contentWrapper { padding-top: .25rem; }
      .contentWrapper * { line-height: 1.2; font-size: var(--auro-text-body-size-sm); }
      .leanPara { margin: 0 0 var(--auro-size-xs) 0 !important; }
      .unstyled { padding-left: 20px; }
    </style>
    <div class="contentWrapper leanPara">
      <p class="leanPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate.</p>
      <p>Eu nisl nunc mi ipsum faucibus vitae. Tristique senectus et netus et malesuada fames ac turpis. Nunc sed velit dignissim sodales ut. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Vel pharetra vel turpis nunc eget lorem. Vitae sapien pellentesque habitant morbi tristique senectus et. </p>
      <ul class="unstyled">
        <li>Varius sit amet mattis vulputate enim. </li>
        <li>Amet risus nullam eget felis eget nunc. Id consectetur purus ut faucibus pulvinar.</li>
      </ul>
      <p class="leanPara">Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Porttitor rhoncus dolor purus non enim. Sit amet nulla facilisi morbi tempus iaculis urna id. Nec ullamcorper sit amet risus nullam eget felis.</p>
      <p class="fineprint" style="margin: 0;">
        * Non arcu risus quis varius quam quisque id. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nec feugiat nisl pretium fusce id velit ut tortor.
      </p>
    </div>
  </auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom-content.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom-content.html -->

```html
<auro-alert type="information">
  <style>
    .contentWrapper { padding-top: .25rem; }
    .contentWrapper * { line-height: 1.2; font-size: var(--auro-text-body-size-sm); }
    .leanPara { margin: 0 0 var(--auro-size-xs) 0 !important; }
    .unstyled { padding-left: 20px; }
  </style>
  <div class="contentWrapper leanPara">
    <p class="leanPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate.</p>
    <p>Eu nisl nunc mi ipsum faucibus vitae. Tristique senectus et netus et malesuada fames ac turpis. Nunc sed velit dignissim sodales ut. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Vel pharetra vel turpis nunc eget lorem. Vitae sapien pellentesque habitant morbi tristique senectus et. </p>
    <ul class="unstyled">
      <li>Varius sit amet mattis vulputate enim. </li>
      <li>Amet risus nullam eget felis eget nunc. Id consectetur purus ut faucibus pulvinar.</li>
    </ul>
    <p class="leanPara">Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Porttitor rhoncus dolor purus non enim. Sit amet nulla facilisi morbi tempus iaculis urna id. Nec ullamcorper sit amet risus nullam eget felis.</p>
    <p class="fineprint" style="margin: 0;">
      * Non arcu risus quis varius quam quisque id. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nec feugiat nisl pretium fusce id velit ut tortor.
    </p>
  </div>
</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Fixed pixels

There are scenarios where the styles of a component do not appear as intended due to a dependency on `16px` root font size. In order to address this, use the `fixed` feature to update the default `REM` values with fixed `px` values.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/fixed-pixels.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/fixed-pixels.html -->
  <auro-alert fixed type="warning">This is warning message</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/fixed-pixels.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/fixed-pixels.html -->

```html
<auro-alert fixed type="warning">This is warning message</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-alert` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-alert';
registerComponent('custom-alert');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-alert` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-alert type="warning">Salutations World!</custom-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-alert type="warning">Salutations World!</custom-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>