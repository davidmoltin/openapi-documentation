---
title: Update Option
nav_label: Update Option
sidebar_position: 50
---

## `PUT` Update a Product Variation Option

```http
https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId
```

:::note
Use the same `OptionId` in the path and the body to avoid errors.
:::

## Parameters

### Path parameters

| Name          | Required | Type     | Description                                          |
| ------------- | -------- | -------- | ---------------------------------------------------- |
| `variationId` | Required | `string` | The ID of the variation that consists of the option. |
| `optionId`    | Required | `string` | The ID of the option that you want to update.        |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name          | Required | Type     | Description                                                           |
| ------------- | -------- | -------- | --------------------------------------------------------------------- |
| `optionId`    | Required | `string` | The ID of the option that you want to update.                         |
| `name`        | Required | `string` | The name of the option.                                               |
| `description` | Required | `string` | The description of the option.                                        |
| `type`        | Required | `string` | The type of resource object. You must use `product-variation-option`. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/variations/684bceee-0ee3-4f43-ac32-50bb44c1eee5/options/39148bc3-3028-4196-9350-1b4ac927c9d6 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-type: application/json" \
     -d $'{
        {
        "data": {
          "type": "product-variation-option",
          "id": "39148bc3-3028-4196-9350-1b4ac927c9d6",
          "attributes": {
            "name": "Blue",
            "description": "This is a color."
        }
    }
}'
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "product-variation-option",
        "id": "2950cae3-1050-4c43-9fbd-2aa60dc5c249",
        "attributes": {
            "name": "Blue",
            "description": "This is a color."
        }
    }
}
```
