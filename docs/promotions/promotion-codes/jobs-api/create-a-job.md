---
title: Create Promotion Codes Generation Job
nav_label: Create Promotion Codes Generation Job
sidebar_position: 3
---

## `POST` Create Promotion Codes Generation Job

```http
https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs
```

Use this endpoint to create an asynchronous job to generate codes.

{% callout  %}
- You can only initiate one job within a promotion. If you want to run another job for the same promotion, you must wait until the previous job is completed or failed. However, you can create new jobs for different promotions even if there are pending jobs in other promotions.
- If you intend to manage promotions with more than 10,000 codes per promotion, we recommend [exporting codes](/docs/promotions/jobs-api/export-codes) for viewing purposes instead of attempting to view them within Commerce Manager. This recommendation is made due to our enforced maximum page offset limit of 10,000. Altering the `page_offset_limit` value poses potential performance risks to the platform.
- A `code_generate` job is initiated even if the maximum allowable number of codes for the promotion has been reached. However, when processed, this job will fail. To view the status of this failed job, you can only do so by passing [GET Jobs](/docs/promotions/jobs-api/get-jobs) request.
- A limited number of jobs can be processed at a time. Jobs are queued and processed sequentially, one after the other. You can expect a certain delay before job processing.
:::

## Parameters

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `promotionID` | Required | `string` | The unique identifier of a promotion. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name       | Required | Type     | Description                               |
|:-----------|:---------|:---------|:------------------------------------------|
| `type`     | Required | `string` | Must be set to `promotion_job`. |
| `job_type` | Required | `string` | Specifies the type of task you want to run. For example, `code_generate` to generate codes or `code_export` to export codes. |
| `name` | Optional | `string` | Represents the name of the job. The maximum allowed value is 50. |
| `parameters.number_of_codes` | Required for `code_generate` type | `integer` | Specifies the number of codes to be generated. The number of codes cannot be greater than 1000. |
| `parameters.max_uses_per_code` | Optional | `integer` | Specifies the maximum number of usages of a code for a promotion. If set to zero, you cannot use this promotion. If no value is set, it can be used unlimited number of times. |
| `parameters.consume_unit` | Optional | `string` | Specifies whether the usage limitation is at the item-level or cart-level. The options available are `per_item` and `per_cart`. |
| `code_prefix` | Optional | `string` | Indicates the prefix to include with the promotion code. For example, when the generated value is *aa2b-3c4d* and the prefix value is set as `summer`, the promotion code becomes *summer-aa2b-3c4d*.
| `code_length` | Optional | `integer` | Specifies the code length, which ranges from 8 to 16 characters. The default code length is eight characters, and a dash is added after every four characters in the code. For example, *aa2b-3c4d*. |

## Request Example - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs \
     -H "Authorization: Bearer XXXX"
     -d $'{
       "data": {
         "type": "promotion_job",
         "job_type": "code_generate",
         "name": "summer sale job ",
         "parameters": {
            "number_of_codes": 1,
            "max_uses_per_code": 1,
            "consume_unit": "per_cart",
            "code_prefix":"Summer-",
            "code_length": 10
        }
    }
}
```

## Response Example

`201 Created`

```json
{
    "data": {
        "type": "promotion_job",
        "id": "f890bc57-5e08-4f04-95e7-36bd8aab1095",
        "promotion_id": "19c08913-cc8c-47d8-a211-450c9e945970",
        "job_type": "code_generate",
        "name": "summer sale job ",
        "parameters": {
            "number_of_codes": 1,
            "consume_unit": "per_cart",
            "max_uses_per_code": 1,
            "code_length": 10,
            "code_prefix": "Summer-"
        },
        "status": "pending",
        "meta": {
            "timestamps": {
                "created_at": "2023-08-01T22:46:50.006975613Z",
                "updated_at": "2023-08-01T22:46:50.006975613Z"
            }
        }
    }
}
```

## Errors

The following error is returned when the number of codes exceeds 1000:

```json
{
    "errors": [
        {
            "status": 400,
            "source": "data.parameters.number_of_codes",
            "title": "Too many promotion codes",
            "detail": "Only 1000 promotion codes are allowed per promotion"
        }
    ]
}
```

When the promotion is set to automatic, the manual code generation, including the bulk generation code, is disabled. If you attempt to create `code_generate` job for an automatic promotion, following error response is returned:

```json
{
    "errors": [
        {
            "status": "422",
            "title": "No codes allowed",
            "detail": "Cannot add codes to an automatic promotion"
        }
    ]
}
```




