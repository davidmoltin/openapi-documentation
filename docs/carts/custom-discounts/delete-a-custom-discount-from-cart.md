---
title: Delete a Custom Discount from Cart
nav_label: Delete a Custom Discount from Cart
sidebar_position: 4
---

## `DELETE` Delete a Custom Discount from Cart

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/custom-discounts/:customdiscountID
```

Use this endpoint to delete a custom discount from cart.

## Parameters

### Path parameters

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `cartID` | Required | `string` | Specifies the system generated ID for the cart that the customer created. |
| `customdiscountID` | Required | `string` | Specifies the ID for the custom discount to be deleted. |

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. |


## Request Example - Curl

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/carts/:cartID/custom-discounts/:customdiscountID \
     -H "Authorization: Bearer XXXX" 
```

## Response Example

`204 No Content`
