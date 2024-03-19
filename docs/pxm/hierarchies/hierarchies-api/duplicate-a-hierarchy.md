---
title: Duplicate a Hierarchy
nav_label: Duplicate a Hierarchy
sidebar_position: 60
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Duplicate a Hierarchy

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/duplicate_job
```

Using this option, you can duplicate an existing hierarchy. This is useful because it enables you to quickly and easily create multiple hierarchies with the same node structure.

When you duplicate a hierarchy, you can specify a new name and/or a new description for the duplicated hierarchy. All other attributes, such as slug and locales, stay the same.

Any nodes in the existing hierarchy are also replicted in the duplicated hierarchy. In addition, you can optionally use the `include_products` attribute to specify whether you want products associated with the nodes in an existing hierarchy to be associated with the nodes in the duplicated hierarchy.  By default, product associations in an existing hierarchy are not duplicated in a duplicate hierarchy.

Duplicating a hierarchy is an asynchronous operation. When you duplicate a hierarchy, a job is created. The `jobId` of the job is displayed in the response. When the job is complete, the duplicate hierarchy operation is also complete. You can use the `jobId` to see the status of your job using [Get a Job](/docs/pxm/products/jobs-api/get-a-job).

Jobs are processed one at a time. You can continue to send duplicate hierarchy requests, but those jobs are queued. In other words, Commerce looks for any jobs that have a status of PENDING and starts the job with the earliest created date. This process is repeated until all jobs are processed. See [Jobs](/docs/pxm/jobs-api/overview).

Once the job is complete, run:

- [Get all hierarchies](/docs/pxm/hierarchies/hierarchies-api/get-all-hierarchies) to retrieve the `HierarchyId` of your duplicated hierarchy.
- [Get a hierarchy](/docs/pxm/hierarchies/hierarchies-api/get-a-hierarchy) to retrieve the nodes and (if applicable) products associated with the duplicated hierarchy.

:::caution

 The `<Elastic Path Domain URL>/pcm/hierarchies/:hierarchyId/duplicate_job` endpoint (where [Elastic Path Base URL](/docs/api-overview/elastic-path-domains) is the base URL for your region) has the following enhancements:

- is aysnchronous.
- enables you to specify whether you want products associated with the nodes in an existing hierarchy to be associated with the nodes in a duplicated hierarchy.

Therefore, the `<Elastic Path Base URL>/pcm/hierarchies/:hierarchyId/duplicate` endpoint is now deprecated. The `<Elastic Path Base URL>/pcm/hierarchies/:hierarchyId/duplicate` endpoint will be removed on 5th September 2023.

:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy you want to duplicate. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `hierarchy` |
| `attributes.name` | Optional | `string` | The name of the duplicate hierarchy. The maximum length is 1000 characters. |
| `attributes.description` | Optional | `string` | A description of the duplicate hierarchy. |
| `attributes.include_products` | Optional | `boolean` | Specify `true` if you want the product associations in the existing nodes associated in your duplicated hierarchy. If not, specify `false`. |


## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/hierarchies/09150b64-b6a0-4928-a432-3edc721a2150/duplicate_job
     -H "Authorization: Bearer XXXX" \
     {
      "data": {
      "type": "hierarchy",
      "attributes": {
        "name": "football_games",
        "description": "All the football games we sell"
        "include_products": true
       }
     }
    }
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "pim-job",
        "id": "6e0f1078-6d63-4e49-b023-56fb499eff29",
        "attributes": {
            "created_at": "2023-06-16 08:54:30.547215526 +0000 UTC m=+78247.843141564",
            "status": "pending",
            "type": "hierarchy-duplicate",
            "updated_at": "2023-06-16 08:54:30.547215526 +0000 UTC m=+78247.843141564"
        }
    }
}
```

## Related Resources

- [Products API](/docs/pxm/products/ep-pxm-products-api/pxm-products-api-overview)
- [Node Product Relationships API](/docs/pxm/hierarchies/node-relationships-api/create-node-product-relationships)
