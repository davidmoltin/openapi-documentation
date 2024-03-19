---
title: Get All Jobs
nav_label: Get All Jobs
sidebar_position: 10
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

The `jobs` endpoint displays the status of a number of endpoints that function as jobs, for example, product [import](/docs/pxm/products/importing-products/product-import-pxm) and [export](/docs/pxm/products/exporting-products/export-products), and [duplicating hierarchies](/docs/pxm/hierarchies/hierarchies-api/duplicate-a-hierarchy).

## `GET` Get All Jobs

```http
https://useast.api.elasticpath.com/pcm/jobs
```

## Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/jobs \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Examples

`200 OK`

```json
{
      "data": [
        {
          "type": "pim-job",
          "id": "3ab3deca-1f11-47b7-a409-24ea3234d72c",
          "attributes": {
              "created_at": "2021-09-29 15:00:20.885 +0000 UTC",
              "status": "success",
              "type": "child-products",
              "updated_at": "2021-09-29 15:00:20.885 +0000 UTC"
          }
        }
      ]
    }
```

```json
{
  "data": {
    "type": "pim-job",
    "id": "8f3404c0-8eb0-4063-b94a-2c01c88b4da6",
    "attributes": {
      "completed_at: '2023-10-18 11:39:46.595 +0000 UTC',
      "created_at: '2023-10-18 11:39:46.081 +0000 UTC',
      "started_at: '2023-10-18 11:39:46.505 +0000 UTC',
      "status": "success",
      "type": "product-import",
      "updated_at": "2023-10-18 11:39:46.081 +0000 UTC"
    }
  }
}
```

## Related resources

- [Product Import](/docs/pxm/products/importing-products/product-import-pxm)
