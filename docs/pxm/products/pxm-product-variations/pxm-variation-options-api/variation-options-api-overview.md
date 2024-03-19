---
title: Product Variation Options API Overview
nav_label: Product Variation Options API Overview
sidebar_position: 10
---

## Product Variation Option Object

A variation option represents an option for selection for a single product-variation. For example, if your variation is "color", you might have three possible options: `red`, `green`, and `blue`.

| Attribute | Type | Description                                                                                                                                                                                                                                              |
| :--- | :--- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id` | `string` | The unique identifier for this option.                                                                                                                                                                                                                   |
| `type` | `string` | Represents the type of option being returned.                                                                                                                                                                                                            |
|  `name` | `string` | A human recognizable identifier for the option, also used in the SLUG for child products. Option names can only contain A to Z, a to z, 0 to 9, hyphen, underscore, and period. Spaces or other special characters like ^, [], *, and $ are not allowed. |
|  `description` | `string` | A human readable description of the product-variation object.                                                                                                                                                                                            |
| `modifiers` | `array` | An array of `modifiers` objects belonging to this variation option.                                                                                                                                                                                      |

{% expandable-info title="Important" %}
Option names may contain lowercase and uppercase alphabets, and numeric characters. However, they must not contain the following, else you cannot build the child products:

- be duplicated
- contain special characters, except the following:
    - hyphen
    - underscore
    - period
- contain spaces

{% /expandable-info %}

## Sample Object

```
{
    "type": "option",
    "id": "67af507f-e901-4647-a265-3aa931382959",
    "name": "Red",
    "description": "Red"
}
```
