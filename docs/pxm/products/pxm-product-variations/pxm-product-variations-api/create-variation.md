---
title: Create a Variation
nav_label: Create a Variation
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create a Variation

```http
https://useast.api.elasticpath.com/pcm/variations
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| :-------------- | :------- | :------- | :-------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name              | Required | Type     | Description                                                    |
| :---------------- | :------- | :------- | :------------------------------------------------------------- |
| `type`            | Required | `string` | The type of resource object. You must use `product-variation`. |
| `attributes.name` | Required | `string` | The variation name.                                            |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-variation",
            "attributes": {
                "name": "color"
            }
        }
    }'
```

## Response Example

`201 Created`

```json
{
    "data": {
        "type": "product-variation",
        "id": "8b9f9d4d-6d17-4113-b028-d54de3555bdf",
        "attributes": {
            "name": "color"
        },
        "meta": {
            "owner": "store"
        }
    }
}
```
