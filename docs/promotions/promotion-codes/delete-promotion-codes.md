---
title: Delete Promotion Codes
nav_label: Delete Promotion Codes
sidebar_position: 3
---

## `DELETE` Delete a promotion code

```http
https://useast.api.elasticpath.com/v2/promotions/:id/codes/:code
```

Use this endpoint to delete a single promotion code.

### Parameters

#### Path parameters

| Name   | Required | Type     | Description                                              |
| ------ | -------- | -------- | -------------------------------------------------------- |
| `id`   | Required | `string` | Specifies ID of the promotion associated with the codes. |
| `code` | Required | `string` | Specifies the code that you want to delete.              |

#### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request example

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/promotions/:id/codes/:code \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json"
```

#### Response example

`204 No Content`

## `DELETE` Delete multiple promotion codes

```http
https://useast.api.elasticpath.com/v2/promotions/:id/codes
```

Use this endpoint to delete one or more promotion codes.

### Parameters

#### Path parameters

| Name | Required | Type     | Description                                    |
| ---- | -------- | -------- | ---------------------------------------------- |
| `id` | Required | `string` | ID of the promotion associated with the codes. |

#### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name           | Required | Type     | Description                                                         |
| -------------- | -------- | -------- | ------------------------------------------------------------------- |
| `codes[].code` | Required | `object` | Specifies the code that you want to delete.                         |
| `codes[]`      | Required | `array`  | Specifies an array of codes.                                        |
| `type`         | Required | `string` | Specifies the type of the resource, you must use `promotion_codes`. |

### Request example

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/promotions/:id/codes \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data":{
        "type":"promotion_codes",
        "codes": [
          {"code":"ZXY_CBA"},
          {"code":"ABC_XYZ"}
        ]
      }
    }'

```

#### Response example

`204 No Content`
