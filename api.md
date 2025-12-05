<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-alert

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type                                               | Default | Description                                                                         |
| -------------- | -------------- | --------- | -------------------------------------------------- | ------- | ----------------------------------------------------------------------------------- |
| hidden         | hidden         |           | boolean                                            |         | If present, the component will be hidden both visually and from screen readers      |
| hiddenAudible  | hiddenAudible  |           | boolean                                            |         | If present, the component will be hidden from screen readers, but seen visually     |
| hiddenVisually | hiddenVisually |           | boolean                                            |         | If present, the component will be hidden visually, but still read by screen readers |
| noIcon         | noIcon         |           | boolean                                            |         | Removes icon from alert UI when `type` attribute is set                             |
| type           | type           |           | `information` \| `error` \| `success` \| `warning` |         | Component will render visually based on which type value is set                     |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                                              |
| --------- | ---------------------------------------------------------------------------------------- |
| (default) | Provide text for the alert. If using multiple lines, separate each line with `<p>` tags. |

### CSS Shadow Parts

| Name          | Description                                          |
| ------------- | ---------------------------------------------------- |
| alert         | Use for customizing the style of the alert container |
| alert-content | Use for customizing the style of the alert content   |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-alert>This is a default error with no error type specified.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-alert>This is a default error with no error type specified.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Hidden

Use the `hidden` attribute to hide the `auro-alert` component from the user and screenreader.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/hidden.html) -->
  <!-- The below content is automatically added from ./../apiExamples/hidden.html -->
  <auro-alert hidden type="error">This content will be hidden visually and from screen readers.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/hidden.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/hidden.html -->

```html
<auro-alert hidden type="error">This content will be hidden visually and from screen readers.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Hidden Audibly

Use the `hiddenAudible` attribute to hide the `auro-alert` component from the screenreader only.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/hidden-audible.html) -->
  <!-- The below content is automatically added from ./../apiExamples/hidden-audible.html -->
  <auro-alert hiddenAudible type="error">This content will be hidden from screen readers.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/hidden-audible.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/hidden-audible.html -->

```html
<auro-alert hiddenAudible type="error">This content will be hidden from screen readers.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Hidden Visually

Use the `hiddenVisually` attribute to visually hide the `auro-alert` component from the user only.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/hidden-visually.html) -->
  <!-- The below content is automatically added from ./../apiExamples/hidden-visually.html -->
  <auro-alert hiddenVisually type="error">This content will be hidden visually, but screen readers will still pick it up.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/hidden-visually.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/hidden-visually.html -->

```html
<auro-alert hiddenVisually type="error">This content will be hidden visually, but screen readers will still pick it up.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### No Icon

Use the `noIcon` attribute to remove the icon from the alert UI when the `type` attribute is set.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/type-noicon.html) -->
  <!-- The below content is automatically added from ./../apiExamples/type-noicon.html -->
  <auro-alert noIcon type="error">Transaction failed.</auro-alert>
  <br />
  <auro-alert noIcon type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
  <br />
  <auro-alert noIcon type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
  <br />
  <auro-alert noIcon type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/type-noicon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/type-noicon.html -->

```html
<auro-alert noIcon type="error">Transaction failed.</auro-alert>
<br />
<auro-alert noIcon type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
<br />
<auro-alert noIcon type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
<br />
<auro-alert noIcon type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Type

Use the `type` attribute to apply an icon and border color that match the alert’s purpose. It supports the following values: `error`, `information`, `success`, and `warning`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/type.html) -->
  <!-- The below content is automatically added from ./../apiExamples/type.html -->
  <auro-alert type="error">Transaction failed.</auro-alert>
  <br />
  <auro-alert type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
  <br />
  <auro-alert type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
  <br />
  <auro-alert type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/type.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/type.html -->

```html
<auro-alert type="error">Transaction failed.</auro-alert>
<br />
<auro-alert type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
<br />
<auro-alert type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
<br />
<auro-alert type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Multi-line Alert

If you need to present multiple lines in the same alert, wrap each line in a `<p>` tag.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/multiline.html) -->
  <!-- The below content is automatically added from ./../apiExamples/multiline.html -->
  <auro-alert type="error">
    <p>This is error message 1.</p>
    <p>This is error message 2.</p>
  </auro-alert>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/multiline.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/multiline.html -->

```html
<auro-alert type="error">
  <p>This is error message 1.</p>
  <p>This is error message 2.</p>
</auro-alert>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Customize content

While Auro components, `auro-alert` included, come with a pre-defined UI opinion, another feature that is fully supported is a user's ability to customize any content in the slot. The following example illustrates how a user can completely customize the content in the `<slot>` of the element, while not needing to recreate the `auro-alert` UI.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom-content.html) -->
  <!-- The below content is automatically added from ./../apiExamples/custom-content.html -->
  <auro-alert type="information">
    <style>
      .contentWrapper { padding-top: .25rem; }
      .contentWrapper * { line-height: 1.2 !important; font-size: var(--ds-text-body-size-sm); }
      .leanPara { margin: 0 0 var(--ds-size-xs) 0 !important; }
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom-content.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/custom-content.html -->

```html
<auro-alert type="information">
  <style>
    .contentWrapper { padding-top: .25rem; }
    .contentWrapper * { line-height: 1.2 !important; font-size: var(--ds-text-body-size-sm); }
    .leanPara { margin: 0 0 var(--ds-size-xs) 0 !important; }
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

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use '@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska' as v;

:host {
  --ds-auro-alert-border-color: var(--ds-basic-color-status-default, #{v.$ds-basic-color-status-default});
  --ds-auro-alert-container-color: var(--ds-basic-color-surface-default, #{v.$ds-basic-color-surface-default});
  --ds-auro-alert-icon-color: transparent;
  --ds-auro-alert-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
