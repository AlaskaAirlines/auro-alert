<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Alert

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
The following illustrates the default use of the `auro-alert` element.

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

See the following examples that illustrate how to generate a basic alert with the various `error`, `warning`, `information`, or `success` types.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error.html -->
  <auro-alert type="error">Transaction failed.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
  <br>
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/warning.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/warning.html -->
  <auro-alert type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
  <br>
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/information.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/information.html -->
  <auro-alert type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
  <br>
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/success.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/success.html -->
  <auro-alert type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/warning.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/warning.html -->

```html
<auro-alert type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/information.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/information.html -->

```html
<auro-alert type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
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
