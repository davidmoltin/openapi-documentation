---
title: Create an Option
nav_label: Create an Option
sidebar_position: 40
---

## `POST` Create a Product Variation Option

```http
https://useast.api.elasticpath.com/pcm/variations/:variationID/options
```

## Parameters

### Path parameters

| Name          | Required | Type     | Description                                                   |
| ------------- | -------- | -------- | ------------------------------------------------------------- |
| `variationID` | Required | `string` | The ID of the variation for which you want to create options. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name          | Required | Type     | Description                                                               |
| ------------- | -------- | -------- | ------------------------------------------------------------------------- |
| `type`        | Required | `string` | The type of the resource object. You must use `product-variation-option`. |
| `name`        | Required | `string` | The name of the option displayed in the storefront. Option names can only contain A-Z, a-z, 0 to 9, hyphen, underscore, and period. Spaces or other special characters like ^, [], *, and $ are not allowed. |
| `description` | Required | `string` | The description for the option.                                           |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/variations/684bceee-0ee3-4f43-ac32-50bb44c1eee5/options \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
           "type": "product-variation-option"
           "attributes": {
              "description": "Our most popular color",
              "name": "Black"
            }
		     }
    }'
```

## Response Example

`201 Created`

```json
{
    "data": {
        "type": "product-variation-option",
        "id": "eb84ffe3-a723-4790-8019-d28e4695da14",
        "attributes": {
            "description": "Our most popular color",
            "name": "Black"
        }
    }
}
```
