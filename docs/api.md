# auro-alert

## Properties

| Property         | Attribute        | Type      | Description                                      |
|------------------|------------------|-----------|--------------------------------------------------|
| `hidden`         | `hidden`         | `Boolean` | If present, the component will be hidden both visually and from screen readers |
| `hiddenAudible`  | `hiddenAudible`  | `Boolean` | If present, the component will be hidden from screen readers, but seen visually |
| `hiddenVisually` | `hiddenVisually` | `Boolean` | If present, the component will be hidden visually, but still read by screen readers |
| `noIcon`         | `noIcon`         | `Boolean` | Removes icon from alert UI                       |
| `type`           | `type`           | `String`  | Component will render visually based on which type value is set; currently supports `error`, `warning`, `success`, `information` |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Provide text for the alert. If using multiple lines, separate each line with `<p>` tags. |

## CSS Shadow Parts

| Part            | Description                                      |
|-----------------|--------------------------------------------------|
| `alert`         | Use for customizing the style of the alert container |
| `alert-content` | Use for customizing the style of the alert content |
