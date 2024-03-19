---
title: Update a Variation
nav_label: Update a Variation
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Variation

```http
https://useast.api.elasticpath.com/pcm/variations/:variationID
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| :-------------- | :------- | :------- | :-------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Path parameters

| Name          | Required | Type     | Description                        |
| :------------ | :------- | :------- | :--------------------------------- |
| `variationId` | Required | `string` | The ID of the variation to update. |

### Body

| Name              | Required | Type     | Description                                                    |
| :---------------- | :------- | :------- | :------------------------------------------------------------- |
| `type`            | Required | `string` | The type of resource object. You must use `product-variation`. |
| `id`              | Required | `string` | The unique identifier of the product variation.                |
| `attributes.name` | Required | `string` | The variation name.                                            |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/variations/:variationID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-variation",
            "id": "8b9f9d4d-6d17-4113-b028-d54de3555bdf",
            "attributes": {
                "name": "T-Shirt size"
            }
        }
    }'
```

## Response Example

```json
{
    "data": {
        "type": "product-variation",
        "id": "8b9f9d4d-6d17-4113-b028-d54de3555bdf",
        "attributes": {
            "name": "T-Shirt size"
        },
        "meta": {
            "owner": "store"
        }
    }
}
```
