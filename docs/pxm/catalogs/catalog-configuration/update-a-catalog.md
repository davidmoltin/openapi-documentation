---
title: Update a Catalog
nav_label: Update a Catalog
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Catalog

```http
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId
```

Updates an existing catalog. This operation performs a sparse update. Only those catalog fields included in the request body are updated.

## Parameters

### Path parameters

 | Name | Required | Type | Description |
 | :--- | :--- | :--- | :--- |
 | `catalogId` | Required | `string` | The unique identifier of a catalog. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. You must use a client credentials token. |

### Body

Required. A [`Catalog`](/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview#the-catalog-object) object with the attributes you want to update.

| Attribute | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The same `catalogId` that you specify in the path. |
| `type` | Required | `string` | The type of object being returned. Always: `catalog` |
| `attributes.name` | Optional | `string` | The name of the catalog. |
| `attributes.description` | Required | `string` | A description of the catalog, such as the purpose for the catalog. |
| `attributes.hierarchy_ids` | Optional | `[string]` | The unique identifiers of the hierarchies to associate with this catalog. You can use this attribute to sort your hierarchies. Add your hierarchies in the order that you want them to be displayed in your catalog. |
| `attributes.pricebook_id` | Optional | `string` | The unique identifier of the price book to associate with this catalog. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/catalogs/a2a69ad2-85cd-4fb1-8e2b-d621bf915a15 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "id": "a2a69ad2-85cd-4fb1-8e2b-d621bf915a15",
            "type": "catalog",
            "attributes": {
                "name": "Catalog for Canadian market"
                "hierarchy_ids": [
                  "5b040ce0-8026-496e-b884-bc18216ccd39",
                  "61fa471d-51b8-43de-980c-46b090094a48",
                  "008206d9-f5c5-403c-8e08-7390e3f1eb08"
               ],
            }
        }
    }'
```

## Response Example

`200 OK`

```json
{
    "data": {
        "attributes": {
            "owner": "store",
            "created_at": "2021-03-02T19:43:11.817Z",
            "description": "Catalog for the Canadian market.",
            "hierarchy_ids": [
                "5b040ce0-8026-496e-b884-bc18216ccd39",
                "61fa471d-51b8-43de-980c-46b090094a48",
                "008206d9-f5c5-403c-8e08-7390e3f1eb08"
            ],
            "name": "Catalog for Canadian market",
            "pricebook_id": "xya77ce0-fcb8-436b-a120-3d57979421dd",
            "updated_at": "2021-03-02T20:43:44.564Z"
        },
        "id": "a2a69ad2-85cd-4fb1-8e2b-d621bf915a15",
        "type": "catalog"
    },
    "links": {
        "self": "/pcm/catalogs/a2a69ad2-85cd-4fb1-8e2b-d621bf915a15"
    }
}
```
