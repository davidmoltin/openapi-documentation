---
title: Update a Cart
nav_label: Update a Cart
sidebar_position: 4
---

## `PUT` Update a Cart

```http
https://useast.api.elasticpath.com/v2/carts/:cartID
```

Updates cart properties for the specified `cartID`. You can also update a cart to specify custom discounts. You can enable custom discounts when the `discount_settings.custom_discounts_enabled` field is set to `true`. Default is set from cart discount settings for the store. See [Cart Settings](/docs/carts/cart-management/cart-settings).

### Parameters

#### Path parameters

| Name        | Required | Type     | Description                              |
|:------------|:---------|:---------|:-----------------------------------------|
| `cartID` | Required | `string` | The unique identifier of a cart created by you. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name          | Required | Type     | Description                            |
|:--------------|:---------|:---------|:---------------------------------------|
| `name`        | Optional | `string` | The cart name supplied by the customer. A cart name must contain between 1 and 255 characters. You cannot use whitespace characters, but special characters are permitted. For more information, see [Safe Characters](/docs/api-overview/safe-characters). |
| `description` | Optional | `string` | The cart description.                  |
| `discount_settings.custom_discounts_enabled` | Optional | `boolean` | This parameter enables custom discounts for a cart. When set to `true`, Elastic Path promotions will not be applied to the new carts. Default is set from cart discount settings for the store. See [Cart Settings](/docs/carts/cart-management/cart-settings). |
| `snapshot_date` | Optional | `string` | This optional parameter sets a reference date for the cart. If this parameter is set, it allows the cart to act as one that might occur on that specified date. For example, such future carts might acquire future-enabled discounts, allowing users to test and validate future interactions with carts. The `snapshot_date` must be in the format `2026-02-21T15:07:25Z`. By default, this parameter is left empty. |

### Request example

#### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:cartID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \'
     -d $ {
      "data": {
        "name": "My cart",
        "description": "my first cart"
        "discounts": {
            "custom_discounts_enabled": false
        },
        "snapshot_date": "2026-09-10T00:12:00Z",
  },
}
```

#### JavaScript SDK

```javascript
const reference = "XXXX";
const customerToken = "XXXX";
const cartData = {
    name: "Bob’s cart",
    description: "For Holidays",
};

// Where `EPCC` is an authenticated client
await EPCC.Cart(reference).UpdateCart(cartData, customerToken);
```

### Response example

`200 OK`

```json
{
    "data": {
        "id": "df820a6e-ca10-457e-a7ac-f68d13b318dd",
        "name": "my cart",
        "description": "my first cart",
        "snapshot_date": "2026-09-10T00:12:00Z",
        "type": "cart",
        "discount_settings": {
            "custom_discounts_enabled": false
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/carts/v2/carts/df820a6e-ca10-457e-a7ac-f68d13b318dd"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 12221,
                    "currency": "USD",
                    "formatted": "$122.21"
                },
                "without_tax": {
                    "amount": 12221,
                    "currency": "USD",
                    "formatted": "$122.21"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2020-10-15T16:17:53Z",
                "updated_at": "2020-10-15T16:20:55Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "cart_item",
                        "id": "615c4c0e-8184-4991-a5a9-eda5499fb558"
                    }
                ]
            },
            "customers": {
                "data": [
                    {
                        "type": "customer",
                        "id": "9efd11e1-7f66-4581-a9a9-ed63d8ba2474"
                    }
                ]
            }
        }
    }
}
```



