<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-alert

## Properties

| Property         | Attribute        | Type      | Description                                      |
|------------------|------------------|-----------|--------------------------------------------------|
| [hidden](#hidden)         | `hidden`         | `Boolean` | If present, the component will be hidden both visually and from screen readers |
| [hiddenAudible](#hiddenAudible)  | `hiddenAudible`  | `Boolean` | If present, the component will be hidden from screen readers, but seen visually |
| [hiddenVisually](#hiddenVisually) | `hiddenVisually` | `Boolean` | If present, the component will be hidden visually, but still read by screen readers |
| [noIcon](#noIcon)         | `noIcon`         | `Boolean` | Removes icon from alert UI                       |
| [type](#type)           | `type`           | `String`  | Component will render visually based on which type value is set; currently supports `error`, `warning`, `success`, `information` |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Provide text for the alert. If using multiple lines, separate each line with `<p>` tags. |

## CSS Shadow Parts

| Part            | Description                                      |
|-----------------|--------------------------------------------------|
| [alert](#alert)         | Use for customizing the style of the alert container |
| `alert-content` | Use for customizing the style of the alert content |
<!-- AURO-GENERATED-CONTENT:END -->

## Alert API Examples

### `type`

The `type` attribute of the `<auro-alert>` element supports the following values, `error`, `warning`, `information` and `success`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-alert>This is a default error with no error type specified.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
  <br>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-alert>This is a default error with no error type specified.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
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

### `noIcon`

The following `<auro-alert>` example illustrates using the `noIcon` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error-no-icon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error-no-icon.html -->
  <auro-alert noIcon type="error">Transaction failed.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
  <br>
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/information-no-icon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/information-no-icon.html -->
  <auro-alert noIcon type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
  <br>
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/warning-no-icon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/warning-no-icon.html -->
  <auro-alert noIcon type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
  <br>
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/success-no-icon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/success-no-icon.html -->
  <auro-alert noIcon type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
  <br>
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error-no-icon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error-no-icon.html -->

```html
<auro-alert noIcon type="error">Transaction failed.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/information-no-icon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/information-no-icon.html -->

```html
<auro-alert noIcon type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/warning-no-icon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/warning-no-icon.html -->

```html
<auro-alert noIcon type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/success-no-icon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/success-no-icon.html -->

```html
<auro-alert noIcon type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### `hidden`

Use the `hidden` attribute to hide the `auro-alert` component from the user and screenreader.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/hidden.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/hidden.html -->
  <auro-alert hidden type="error">This content will be hidden visually and from screen readers.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/hidden.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/hidden.html -->

```html
<auro-alert hidden type="error">This content will be hidden visually and from screen readers.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### `hiddenVisually`

Use the `hiddenVisually` attribute to visually hide the `auro-alert` component from the user only.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/hidden-visually.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/hidden-visually.html -->
  <auro-alert hiddenVisually type="error">This content will be hidden visually, but screen readers will still pick it up.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/hidden-visually.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/hidden-visually.html -->

```html
<auro-alert hiddenVisually type="error">This content will be hidden visually, but screen readers will still pick it up.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### `hiddenAudible`

Use the `hiddenAudible` attribute to hide the `auro-alert` component from the screenreader only.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/hidden-audible.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/hidden-audible.html -->
  <auro-alert hiddenAudible type="error">This content will be hidden from screen readers.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/hidden-audible.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/hidden-audible.html -->

```html
<auro-alert hiddenAudible type="error">This content will be hidden from screen readers.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../../src/tokens.scss -->

```scss
@import '../node_modules/@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables';

:host {
  --ds-auro-alert-border-color: var(--ds-color-border-secondary-default, #{$ds-color-border-secondary-default});
  --ds-auro-alert-container-color: var(--ds-color-container-primary-default, #{$ds-color-container-primary-default});
  --ds-auro-alert-icon-color: transparent;
  --ds-auro-alert-text-color: var(--ds-color-text-primary-default, #{$ds-color-text-primary-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
