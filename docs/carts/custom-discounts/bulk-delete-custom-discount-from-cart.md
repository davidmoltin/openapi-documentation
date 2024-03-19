---
title: Bulk Delete Custom Discount from Cart
nav_label: Bulk Delete Custom Discount from Cart
sidebar_position: 9
---

## `DELETE` Bulk Delete Custom Discount from Cart

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/custom-discounts
```

## Parameters

### Path parameters

 Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `cartID` | Required | `string` | Specifies the system generated ID for the cart that the customer created. |

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. |


## Request Example - Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartID/custom-discounts \
     -H "Authorization: Bearer XXXX" 
```

## Response Example

`204 No Content`




