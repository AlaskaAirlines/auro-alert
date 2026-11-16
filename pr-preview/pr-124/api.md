<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-alert

Shows an inline message that gives feedback about a user action, such as an error, success, warning, or information message.

**Key capabilities**
- **Alert types**: Set `type` to `error`, `information`, `success`, or `warning` to change the icon and border color.
- **Optional icon**: Set `noIcon` to remove the icon.
- **Hiding**: Set `hidden` to hide the alert from everyone, `hiddenVisually` to hide it visually but keep it available to screen readers, or `hiddenAudible` to keep it visible but hidden from screen readers.
- **Custom content**: The default slot accepts any content, and each `<p>` tag starts a new line.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-alert type="success"&gt;Your changes are saved.&lt;/auro-alert&gt;</code></pre>

### Properties and attributes

| Properties     | Attributes     | Modifiers | Type                                               | Default | Relevant when | Description                                                                                                                                                                                                                                                                                                                                                          |
| -------------- | -------------- | --------- | -------------------------------------------------- | ------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hidden         | hidden         |           | boolean                                            |         |               | Hides the alert both visually and from screen readers.                                                                                                                                                                                                                                                                                                               |
| hiddenAudible  | hiddenAudible  |           | boolean                                            |         |               | Hides the alert from screen readers while keeping it visible.                                                                                                                                                                                                                                                                                                        |
| hiddenVisually | hiddenVisually |           | boolean                                            |         |               | Hides the alert visually while keeping it available to screen readers.                                                                                                                                                                                                                                                                                               |
| noIcon         | noIcon         |           | boolean                                            |         | `type`        | Removes the icon from the alert. Applies only when `type` is set, because an alert without a type has no icon.                                                                                                                                                                                                                                                       |
| type           | type           |           | `information` \| `error` \| `success` \| `warning` |         |               | Sets the alert's purpose, which controls its icon and border color: `error`, `warning`, `success`, or `information`. Without a value, the alert shows no icon and uses a default border color. Screen readers announce `error`, `success`, and `warning` alerts right away because they use `role="alert"`, but `information` alerts aren't announced automatically. |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name      | Description                                                                              |
| --------- | ---------------------------------------------------------------------------------------- |
| (default) | Provide text for the alert. If using multiple lines, separate each line with `<p>` tags. |

### CSS shadow parts

| Name          | Description                                              |
| ------------- | -------------------------------------------------------- |
| alert         | The outer container that holds the icon and the message. |
| alert-content | The area next to the icon that holds the alert message.  |

### CSS custom properties

| Name                            | Description                    |
| ------------------------------- | ------------------------------ |
| --ds-auro-alert-border-color    | Color of the alert's border.   |
| --ds-auro-alert-container-color | Background color of the alert. |
| --ds-auro-alert-icon-color      | Color of the alert's icon.     |
| --ds-auro-alert-text-color      | Color of the alert's text.     |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<auro-alert>This is a default alert with no type set.</auro-alert>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;auro-alert&gt;This is a default alert with no type set.&lt;/auro-alert&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Hidden

Use the `hidden` attribute to hide the alert both visually and from screen readers.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/hidden.html) -->
<!-- The below content is automatically added from ./../apiExamples/hidden.html -->
<auro-alert hidden type="error">This content is hidden visually and from screen readers.</auro-alert>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/hidden.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/hidden.html -->

<pre class="language-html"><code class="language-html">&lt;auro-alert hidden type="error"&gt;This content is hidden visually and from screen readers.&lt;/auro-alert&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Hidden audibly

Use the `hiddenAudible` attribute to hide the alert from screen readers while keeping it visible.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/hidden-audible.html) -->
<!-- The below content is automatically added from ./../apiExamples/hidden-audible.html -->
<auro-alert hiddenAudible type="error">This content is hidden from screen readers.</auro-alert>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/hidden-audible.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/hidden-audible.html -->

<pre class="language-html"><code class="language-html">&lt;auro-alert hiddenAudible type="error"&gt;This content is hidden from screen readers.&lt;/auro-alert&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Hidden visually

Use the `hiddenVisually` attribute to hide the alert visually while screen readers still read it.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/hidden-visually.html) -->
<!-- The below content is automatically added from ./../apiExamples/hidden-visually.html -->
<auro-alert hiddenVisually type="error">This content is hidden visually, but screen readers still read it.</auro-alert>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/hidden-visually.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/hidden-visually.html -->

<pre class="language-html"><code class="language-html">&lt;auro-alert hiddenVisually type="error"&gt;This content is hidden visually, but screen readers still read it.&lt;/auro-alert&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### No icon

Use the `noIcon` attribute to remove the icon from the alert UI when the `type` attribute is set.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/type-noicon.html) -->
<!-- The below content is automatically added from ./../apiExamples/type-noicon.html -->
<auro-alert noIcon type="error">Transaction failed.</auro-alert>
<br />
<auro-alert noIcon type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
<br />
<auro-alert noIcon type="success">Your status for Flight 20 to Aruba has been updated.</auro-alert>
<br />
<auro-alert noIcon type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/type-noicon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/type-noicon.html -->

<pre class="language-html"><code class="language-html">&lt;auro-alert noIcon type="error"&gt;Transaction failed.&lt;/auro-alert&gt;
&lt;br /&gt;
&lt;auro-alert noIcon type="information"&gt;You are confirmed on Flight 20 to Aruba.&lt;/auro-alert&gt;
&lt;br /&gt;
&lt;auro-alert noIcon type="success"&gt;Your status for Flight 20 to Aruba has been updated.&lt;/auro-alert&gt;
&lt;br /&gt;
&lt;auro-alert noIcon type="warning"&gt;Warning. Session timed out. Look for a confirmation email to verify your transaction.&lt;/auro-alert&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Type

Use the `type` attribute to apply an icon and border color that match the alert’s purpose. It supports the following values: `error`, `information`, `success`, and `warning`. The `error`, `success`, and `warning` types use `role="alert"`, so screen readers announce them right away. The `information` type doesn't use it, so screen readers don't announce it automatically.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/type.html) -->
<!-- The below content is automatically added from ./../apiExamples/type.html -->
<auro-alert type="error">Transaction failed.</auro-alert>
<br />
<auro-alert type="information">You are confirmed on Flight 20 to Aruba.</auro-alert>
<br />
<auro-alert type="success">Your status for Flight 20 to Aruba has been updated.</auro-alert>
<br />
<auro-alert type="warning">Warning. Session timed out. Look for a confirmation email to verify your transaction.</auro-alert>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/type.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/type.html -->

<pre class="language-html"><code class="language-html">&lt;auro-alert type="error"&gt;Transaction failed.&lt;/auro-alert&gt;
&lt;br /&gt;
&lt;auro-alert type="information"&gt;You are confirmed on Flight 20 to Aruba.&lt;/auro-alert&gt;
&lt;br /&gt;
&lt;auro-alert type="success"&gt;Your status for Flight 20 to Aruba has been updated.&lt;/auro-alert&gt;
&lt;br /&gt;
&lt;auro-alert type="warning"&gt;Warning. Session timed out. Look for a confirmation email to verify your transaction.&lt;/auro-alert&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Multi-line alert

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

<pre class="language-html"><code class="language-html">&lt;auro-alert type="error"&gt;
  &lt;p&gt;This is error message 1.&lt;/p&gt;
  &lt;p&gt;This is error message 2.&lt;/p&gt;
&lt;/auro-alert&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Customize content

Put your own content in the default slot to replace the standard alert text. The following example customizes the slot content and keeps the alert's icon and border.

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

<pre class="language-html"><code class="language-html">&lt;auro-alert type="information"&gt;
  &lt;style&gt;
    .contentWrapper { padding-top: .25rem; }
    .contentWrapper * { line-height: 1.2 !important; font-size: var(--ds-text-body-size-sm); }
    .leanPara { margin: 0 0 var(--ds-size-xs) 0 !important; }
    .unstyled { padding-left: 20px; }
  &lt;/style&gt;
  &lt;div class="contentWrapper leanPara"&gt;
    &lt;p class="leanPara"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate.&lt;/p&gt;
    &lt;p&gt;Eu nisl nunc mi ipsum faucibus vitae. Tristique senectus et netus et malesuada fames ac turpis. Nunc sed velit dignissim sodales ut. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Vel pharetra vel turpis nunc eget lorem. Vitae sapien pellentesque habitant morbi tristique senectus et. &lt;/p&gt;
    &lt;ul class="unstyled"&gt;
      &lt;li&gt;Varius sit amet mattis vulputate enim. &lt;/li&gt;
      &lt;li&gt;Amet risus nullam eget felis eget nunc. Id consectetur purus ut faucibus pulvinar.&lt;/li&gt;
    &lt;/ul&gt;
    &lt;p class="leanPara"&gt;Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Porttitor rhoncus dolor purus non enim. Sit amet nulla facilisi morbi tempus iaculis urna id. Nec ullamcorper sit amet risus nullam eget felis.&lt;/p&gt;
    &lt;p class="fineprint" style="margin: 0;"&gt;
      * Non arcu risus quis varius quam quisque id. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nec feugiat nisl pretium fusce id velit ut tortor.
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/auro-alert&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use '@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska' as v;
&#10;:host {
  --ds-auro-alert-border-color: var(--ds-basic-color-status-default, #{v.$ds-basic-color-status-default});
  --ds-auro-alert-container-color: var(--ds-basic-color-surface-default, #{v.$ds-basic-color-surface-default});
  --ds-auro-alert-icon-color: transparent;
  --ds-auro-alert-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
