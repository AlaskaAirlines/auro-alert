# Alert

The `auro-alert` component renders errors, warnings, and other inline notifications with automated styling elements. Simply add the `type` attribute the corresponding value. If you need to present multiple lines in the same alert wrapper, use p tags for each line.

## auro-alert use cases

The `auro-alert` use cases include:

* Error messages
* Warning messages
* Informational messages

## auro-alert default use

The following illustrates the default use of the `auro-alert` element. Use the `title` and `subtitle` slots to add content to the lockup.

<div class="exampleWrapper">
  <auro-alert>This is a default error with no error type specified.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert>This is a default error with no error type specified.</auro-alert>
  ```
</auro-accordion>

## Single line alerts

### Error

<div class="exampleWrapper">
  <auro-alert type="error">Transaction failed.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert type="error">Transaction failed.</auro-alert>
  ```
</auro-accordion>

### Warning

<div class="exampleWrapper">
  <auro-alert type="warning">Warning.Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert type="warning">Warning.Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
  ```
</auro-accordion>

### Information

<div class="exampleWrapper">
  <auro-alert type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
  ```
</auro-accordion>

### Success

<div class="exampleWrapper">
  <auro-alert type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
  ```
</auro-accordion>

## Multiline alerts

### Error

<div class="exampleWrapper">
  <auro-alert type="error">
    <p>This is error message 1.</p>
    <p>This is error message 2.</p>
  </auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert type="error">
    <p>This is error message 1.</p>
    <p>This is error message 2.</p>
  </auro-alert>
  ```
</auro-accordion>

### Warning

<div class="exampleWrapper">
  <auro-alert type="warning">
    <p>This is warning message 1.</p>
    <p>This is warning message 2.</p>
  </auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert type="warning">
    <p>This is warning message 1.</p>
    <p>This is warning message 2.</p>
  </auro-alert>
  ```
</auro-accordion>

### Information

<div class="exampleWrapper">
  <auro-alert type="information">
    <p>This is information message 1.</p>
    <p>This is information message 2.</p>
  </auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert type="information">
    <p>This is information message 1.</p>
    <p>This is information message 2.</p>
  </auro-alert>
  ```
</auro-accordion>

### Success

<div class="exampleWrapper">
  <auro-alert type="success">
    <p>This is success message 1.</p>
    <p>This is success message 2.</p>
  </auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert type="success">
    <p>This is success message 1.</p>
    <p>This is success message 2.</p>
  </auro-alert>
  ```
</auro-accordion>

## No icon alerts
### Error

<div class="exampleWrapper">
  <auro-alert noIcon type="error">Transaction failed.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert noIcon type="error">Transaction failed.</auro-alert>
  ```
</auro-accordion>

### Warning

<div class="exampleWrapper">
  <auro-alert noIcon type="warning">Warning.Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert noIcon type="warning">Warning.Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
  ```
</auro-accordion>

### Information

<div class="exampleWrapper">
  <auro-alert noIcon type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert noIcon type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
  ```
</auro-accordion>

### Success

<div class="exampleWrapper">
  <auro-alert noIcon type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert noIcon type="success">Your status with flight 20 to Aruba had been updated.</auro-alert>
  ```
</auro-accordion>

## Customize content

While Auro components, `auro-alert` included, come with a pre-defined UI opinion, another feature that is fully supported is a user's ability to customize any content in the slot. The following example illustrates how a user can completely customize the content in the `<slot>` of the element, while not needing to recreate the `auro-alert` UI.

<div class="exampleWrapper">
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
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert type="information">
    <style>
      .contentWrapper { padding-top: var(--auro-size-xxs); }
      .contentWrapper * { line-height: 1.2; font-size: var(--auro-text-body-size-sm); }
      .leanPara { margin: 0 0 var(--auro-size-xs) 0 !important; }
      .unstyled { padding-left: var(--auro-size-lg); }
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
</auro-accordion>

## Fixed pixels

There are scenarios where the styles of a component do not appear as intended due to a dependency on `16px` root font size. In order to address this, use the `fixed` feature to update the default `REM` values with fixed `px` values.

<div class="exampleWrapper">
  <auro-alert fixed type="warning">This is warning message</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert fixed type="warning">This is warning message</auro-alert>
  ```
</auro-accordion>

## a11y alerts

### Hidden visually and from screen readers

<div class="exampleWrapper">
  <auro-alert hidden type="error">This content will be hidden visually and from screen readers.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert hidden type="error">This content will be hidden visually and from screen readers.</auro-alert>
  ```
</auro-accordion>

### Hidden visually

<div class="exampleWrapper">
  <auro-alert hiddenVisually type="error">This content will be hidden visually, but screen readers will still pick it up.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert hiddenVisually type="error">This content will be hidden visually, but screen readers will still pick it up.</auro-alert>
  ```
</auro-accordion>


### Hidden from screen readers

<div class="exampleWrapper">
  <auro-alert hiddenAudible type="error">This content will be hidden from screen readers.</auro-alert>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-alert hiddenAudible type="error">This content will be hidden from screen readers.</auro-alert>
  ```
</auro-accordion>
