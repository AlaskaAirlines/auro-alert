# auro-alert

### Properties & Attributes

| Properties | Attributes | Modifiers | Type    | Default | Description                                                                                                                      |
| ---------- | ---------- | --------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| noIcon     | noIcon     |           | boolean |         | Removes icon from alert UI when `type` attribute is set                                                                          |
| type       | type       |           | string  |         | Component will render visually based on which type value is set; currently supports `error`, `information`, `success`, `warning` |

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