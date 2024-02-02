<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-alert

## Attributes

| Attribute | Type      | Description                   |
|-----------|-----------|-------------------------------|
| [fixed](#fixed)   | `Boolean` | uses px values instead of rem |

## Properties

| Property         | Attribute        | Type      | Description                                      |
|------------------|------------------|-----------|--------------------------------------------------|
| [hidden](#hidden)         | `hidden`         | `Boolean` | If present, the component will be hidden both visually and from screen readers |
| [hiddenAudible](#hiddenAudible)  | `hiddenAudible`  | `Boolean` | If present, the component will be hidden from screen readers, but seen visually |
| [hiddenVisually](#hiddenVisually) | `hiddenVisually` | `Boolean` | If present, the component will be hidden visually, but still read by screen readers |
| [noIcon](#noIcon)         | `noIcon`         | `Boolean` | Removes icon from alert UI                       |
| [role](#role)           | `role`           | `String`  | The role will be set based on type               |
| [type](#type)           | `type`           | `String`  | Component will render visually based on which type value is set; currently supports `error`, `warning`, `success`, `information` |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Provide text for the alert. If using multiple lines, separate each line with <p> tags. |

## CSS Shadow Parts

| Part            | Description                                      |
|-----------------|--------------------------------------------------|
| [alert](#alert)         | Use for customizing the style of the alert container |
| `alert-content` | Use for customizing the style of the alert content |
<!-- AURO-GENERATED-CONTENT:END -->

## Alert API Examples

### type

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

### Multiline

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error-multiline.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error-multiline.html -->
  <auro-alert type="error">
    <p>This is error message 1.</p>
    <p>This is error message 2.</p>
  </auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error-multiline.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error-multiline.html -->

```html
<auro-alert type="error">
  <p>This is error message 1.</p>
  <p>This is error message 2.</p>
</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/warning-multiline.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/warning-multiline.html -->
  <auro-alert type="warning">
    <p>This is warning message 1.</p>
    <p>This is warning message 2.</p>
  </auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/warning-multiline.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/warning-multiline.html -->

```html
<auro-alert type="warning">
  <p>This is warning message 1.</p>
  <p>This is warning message 2.</p>
</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/information-multiline.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/information-multiline.html -->
  <auro-alert type="information">
    <p>This is information message 1.</p>
    <p>This is information message 2.</p>
  </auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/information-multiline.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/information-multiline.html -->

```html
<auro-alert type="information">
  <p>This is information message 1.</p>
  <p>This is information message 2.</p>
</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/success-multiline.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/success-multiline.html -->
  <auro-alert type="success">
    <p>This is success message 1.</p>
    <p>This is success message 2.</p>
  </auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/success-multiline.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/success-multiline.html -->

```html
<auro-alert type="success">
  <p>This is success message 1.</p>
  <p>This is success message 2.</p>
</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### noIcon

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error-no-icon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/error-no-icon.html -->
  <auro-alert noIcon type="error">Transaction failed.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error-no-icon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/error-no-icon.html -->

```html
<auro-alert noIcon type="error">Transaction failed.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/warning-no-icon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/warning-no-icon.html -->
  <auro-alert noIcon type="warning">Warning.Session timed out. Look for a confirmation email to verify your transaction.</
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/warning-no-icon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/warning-no-icon.html -->

```html
<auro-alert noIcon type="warning">Warning.Session timed out. Look for a confirmation email to verify your transaction.</
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/information-no-icon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/information-no-icon.html -->
  <auro-alert noIcon type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/information-no-icon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/information-no-icon.html -->

```html
<auro-alert noIcon type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/success-no-icon.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/success-no-icon.html -->
  <auro-alert noIcon type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/success-no-icon.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/success-no-icon.html -->

```html
<auro-alert noIcon type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### fixed

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

### hidden

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

### hiddenVisually

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

### hiddenAudible

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

### role

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/role.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/role.html -->
  <auro-alert role="alert">This alert has role of "alert"</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/role.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/role.html -->

```html
<auro-alert role="alert">This alert has role of "alert"</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
