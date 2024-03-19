---
title: Get all Catalogs
nav_label: Get all Catalogs
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get all Catalogs

```text
https://useast.api.elasticpath.com/pcm/catalogs
```

Retrieves a list of all the catalogs that you are authorized to view.

## Parameters

### Headers

| Name            | Required | Type     | Description                                                                                  |
| :-------------- | :------- | :------- | :------------------------------------------------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. You must use a client credentials token. |
                                                                    |
## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs \
     -H "Authorization: Bearer XXXX" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "attributes": {
                "owner": "store",
                "created_at": "2021-03-02T19:43:11.817Z",
                "description": "Catalog for the Canadian market.",
                "hierarchy_ids": [
                    "132dd6e7a-2692-4d5a-b8ed-48e243b64c49",
                    "xyca837d-eeb1-4168-a6f8-e8cf9b665e9a"
                ],
                "name": "Catalog for Canadian market",
                "pricebook_id": "xya77ce0-fcb8-436b-a120-3d57979421dd",
                "updated_at": "2021-03-02T20:43:44.564Z"
            },
            "id": "a2a69ad2-85cd-4fb1-8e2b-d621bf915a15",
            "type": "catalog"
        },
        {
            "attributes": {
                "created_at": "2021-03-02T20:13:44.596Z",
                "description": "Catalog for the US market.",
                "hierarchy_ids": [
                    "xybdd6e7a-2692-4d5a-b8ed-48e243b64c49",
                    "xyca837d-eeb1-4168-a6f8-e8cf9b665e9a"
                ],
                "name": "Catalog US",
                "pricebook_id": "xya77ce0-fcb8-436b-a120-3d57979421dd",
                "updated_at": "2021-03-02T20:13:44.596Z"
            },
            "id": "c05112ee-b4d5-4bea-bdcb-81b5ef3306d2",
            "type": "catalog"
        },
        {
            "attributes": {
                "created_at": "2021-03-02T20:45:27.931Z",
                "description": "Catalog for the UK market.",
                "hierarchy_ids": [
                    "132dd6e7a-2692-4d5a-b8ed-48e243b64c49",
                    "15ea837d-eeb1-4168-a6f8-e8cf9b665e9a"
                ],
                "name": "Catalog UK",
                "pricebook_id": "9b665e9a-fcb8-436b-a120-3d57979421dd",
                "updated_at": "2021-03-02T20:45:27.931Z"
            },
            "id": "8caf81b8-9bc7-4b72-92fc-3775722aa06a",
            "type": "catalog"
        }
    ],
    "links": {
        "self": "/pcm/catalogs"
    }
}
```
