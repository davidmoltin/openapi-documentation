---
title: Get all Promotions
nav_label: Get all Promotions
sidebar_position: 10
---

## `GET` Get all Promotions

```http
https://useast.api.elasticpath.com/v2/promotions
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

:::note
You can use pagination with this resource. For more information, see [pagination](/docs/api-overview/pagination).
:::

### Query parameters

| Name     | Required | Type     | Description                                                                                                   |
|:---------|:---------|:---------|:--------------------------------------------------------------------------------------------------------------|
| `filter` | optional | `string` | Filter attributes. For more information, see [Filtering with `v2/promotions`](#filtering-with-v2-promotions). |
| `page[limit]`  | Optional | `integer` | The number of records per page.                                                                                         |
| `page[offset]` | Optional | `integer` | The number of records to offset the results by.                                                                         |

## Filtering

The following operators and attributes are available for [filtering](/docs/api-overview/filtering) promotions:

| Operator | Description                                                       |
|:---------|:------------------------------------------------------------------|
| `eq`     | Equals. Checks if the values of two operands are equal. If they are, the condition is true. |


| Attribute         | Type | Operator | Example              |
|:------------------| :--- |:---------|:---------------------|
| `code`            | `string` | `eq`     | `eq(code,some_code)` |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/promotions \
     -H "Authorization: Bearer XXXX"
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "promotion",
            "id": "3cc6829b-e57f-4ead-b52e-8e23e119bfba",
            "name": "Promo #1",
            "description": "Initial Promotion",
            "enabled": true,
            "promotion_type": "fixed_discount",
            "schema": {
                "currencies": [
                    {
                        "currency": "USD",
                        "amount": 900
                    },
                    {
                        "currency": "GBP",
                        "amount": 1100
                    }
                ]
            },
            "start": "2017-01-13T00:00:00Z",
            "end": "2018-01-13T00:00:00Z",
            "created_by": "seller@elasticpath.com",
            "updated_by": "another_seller@elasticpath.com",
            "created_at": "2018-05-09T20:02:01.036Z",
            "updated_at": "2018-05-09T20:02:01.036Z"
        },
        {
            "type": "promotion",
            "id": "4d04f1e7-9254-4e68-b360-f5eb5d11220f",
            "name": "Promo #1",
            "description": "Initial Promotion",
            "enabled": true,
            "promotion_type": "fixed_discount",
            "schema": {
                "currencies": [
                    {
                        "currency": "USD",
                        "amount": 900
                    },
                    {
                        "currency": "GBP",
                        "amount": 1100
                    }
                ]
            },
            "start": "2017-01-13T00:00:00Z",
            "end": "2018-01-13T00:00:00Z",
            "created_by": "seller@elasticpath.com",
            "updated_by": "another_seller@elasticpath.com",
            "created_at": "2018-05-09T20:01:35.409Z",
            "updated_at": "2018-05-09T20:01:35.409Z"
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/promotions?page[offset]=0&page[limit]=50&filter=",
        "first": "https://useast.api.elasticpath.com/v2/promotions?page[offset]=0&page[limit]=50&filter=",
        "last": "https://useast.api.elasticpath.com/v2/promotions?page[offset]=600&page[limit]=50&filter=",
        "prev": "https://useast.api.elasticpath.com/v2/promotions?page[offset]=0&page[limit]=50&filter=",
        "next": "https://useast.api.elasticpath.com/v2/promotions?page[offset]=50&page[limit]=50&filter="
    },
    "meta": {
        "page": {
            "limit": 100,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 100
        }
    }
}
```
