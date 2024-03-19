---
title: Get Promotion Jobs
nav_label: Get Promotion Jobs
sidebar_position: 1
---

## `GET` GET Promotion Jobs

```http
https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs
```

## Parameters

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `promotionID` | Required | `string` | The unique identifier of a promotion. |

### Query parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `filter` | Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Attribute | Type | Operator | Example |
| ----------| ----- | -------- | ------ |
| `job_type` | `string` | `eq` | `eq(job_type, code_export)` |
| `status` | `string` | `eq` | `eq(status, complete)` |

## Request Example - Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs \
     -H "Authorization: Bearer XXXX"
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "promotion_job",
            "id": "e7dfe48f-0dc0-49d4-a8d4-66920230d940",
            "promotion_id": "19c08913-cc8c-47d8-a211-450c9e945970",
            "job_type": "code_generate",
            "name": "bulk gen",
            "parameters": {
                "number_of_codes": 2,
                "consume_unit": "per_cart"
            },
            "status": "pending",
            "meta": {
                "timestamps": {
                    "created_at": "2023-08-01T21:53:46.448Z",
                    "updated_at": "2023-08-01T21:53:46.448Z"
                }
            }
        },
        …
    ]
}
```


