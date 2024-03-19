---
title: Get a Catalog
nav_label: Get a Catalog
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get by ID

```text
https://useast.api.elasticpath.com/pcm/catalogs/:catalogId
```

Retrieves the specified catalog.

## Parameters

### Path parameters

| Name        | Required | Type     | Description                           |
| :---------- | :------- | :------- | :------------------------------------ |
| `catalogId` | Required | `string` | The unique identifier of the catalog. |

### Headers

| Name            | Required | Type     | Description                                                                                  |
| :-------------- | :------- | :------- | :------------------------------------------------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. You must use a client credentials token. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs/55d4121b-1d56-41c2-993c-a800325f9eb7 \
     -H "Authorization: Bearer XXXX" \
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
                "xybdd6e7a-2692-4d5a-b8ed-48e243b64c49",
                "xyca837d-eeb1-4168-a6f8-e8cf9b665e9a"
            ],
            "name": "Catalog CA",
            "pricebook_id": "xya77ce0-fcb8-436b-a120-3d57979421dd",
            "updated_at": "2021-03-02T19:43:11.817Z"
        },
        "id": "a2a69ad2-85cd-4fb1-8e2b-d621bf915a15",
        "type": "catalog"
    },
    "links": {
        "self": "/pcm/catalogs/a2a69ad2-85cd-4fb1-8e2b-d621bf915a15"
    }
}
```
