# auro-alert

Shows an inline message that gives feedback about a user action, such as an error, success, warning, or information message.

**Key capabilities**
- **Alert types**: Set `type` to `error`, `information`, `success`, or `warning` to change the icon and border color.
- **Optional icon**: Set `noIcon` to remove the icon.
- **Hiding**: Set `hidden` to hide the alert from everyone, `hiddenVisually` to hide it visually but keep it available to screen readers, or `hiddenAudible` to keep it visible but hidden from screen readers.
- **Custom content**: The default slot accepts any content, and each `<p>` tag starts a new line.

**Example**
```html
<auro-alert type="success">Your changes are saved.</auro-alert>
```

### Properties and attributes

| Properties     | Attributes     | Modifiers | Type                                               | Default | Relevant when | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------- | -------------- | --------- | -------------------------------------------------- | ------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hidden         | hidden         |           | boolean                                            |         |               | Hides the alert both visually and from screen readers.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| hiddenAudible  | hiddenAudible  |           | boolean                                            |         |               | Hides the alert from screen readers while keeping it visible.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| hiddenVisually | hiddenVisually |           | boolean                                            |         |               | Hides the alert visually while keeping it available to screen readers.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| noIcon         | noIcon         |           | boolean                                            |         | `type`        | Removes the icon from the alert. Applies only when `type` is set, because an alert without a type has no icon.                                                                                                                                                                                                                                                                                                                                                                                                   |
| type           | type           |           | `information` \| `error` \| `success` \| `warning` |         |               | Sets the alert's purpose, which controls its icon and border color: `error`, `warning`, `success`, or `information`. Without a value, the alert shows no icon and uses a default border color. Screen readers announce `error`, `success`, and `warning` alerts right away because they set `role="alert"`, but `information` alerts set no role, so screen readers don't announce them automatically. The alert does not currently reset its role when `type` changes, so set `type` before the alert is shown. |

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