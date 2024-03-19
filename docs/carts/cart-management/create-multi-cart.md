---
title: Create a Custom Cart
nav_label: Create a Custom Cart
sidebar_position: 3
---

Each customer can have multiple carts. Use the `carts` API to create and update multiple carts.

The carts are distinct from one another. Shoppers can add different items to their carts. They can check out one of the carts without affecting the content or status of their other carts.

After the shopper checks out the cart, the cart remains available to the shopper. The cart is persistent and stays with the shopper after it is used.

You can also create a cart to specify custom discounts. You can enable custom discounts when the `discount_settings.custom_discounts_enabled` field is set to `true`. Default is set from cart discount settings for the store. See [Cart Settings](/docs/carts/cart-management/cart-settings).

## `POST` Create a Custom Cart

```http
https://useast.api.elasticpath.com/v2/carts
```

Creates a custom cart. Call this endpoint each time a customer creates a cart.

### Parameters

#### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. |
| `x-moltin-customer-token` | Optional | `string` | A customer token to be associated with the cart. |

#### Body

| Name          | Required | Type     | Description                            |
|:--------------|:---------|:---------|:---------------------------------------|
| `name`        | Required | `string` | The cart name provided by the customer. A cart name must contain 1 to 255 characters. You cannot use whitespace characters, but special characters are permitted. For more information, see the [Safe Characters](/docs/api-overview/safe-characters) section. |
| `id`          | Optional | `string` | Custom identifier for the cart. Only `a-zA-Z0-9_-` symbols are allowed. |
| `description` | Optional | `string` | The cart description.                  |
| `discount_settings.custom_discounts_enabled` | Optional | `boolean` | This parameter enables custom discounts for a cart. When set to `true`, Elastic Path promotions will not be applied to the new carts. Default is set from cart discount settings for the store. See [Cart Settings](/docs/carts/cart-management/cart-settings). |

### Request example

#### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \'
     -H "x-moltin-customer-token: XXXX" \'
     -d $ {
      "data": {
        "name": "Bob’s cart",
        "description": "For Holidays",
        "discount_settings": {
        "custom_discounts_enabled": true
    }
  }
}
```

#### JavaScript SDK

```javascript
const customerToken = "XXXX";
const cartData = {
    name: "Bob’s cart",
    description: "For Holidays",
};

// Where `EPCC` is an authenticated client
await EPCC.Cart().CreateCart(cartData, customerToken);
```

### Response example

`201 Created`

```json
{
    "data": {
        "id": "f52eafaf-123e-4eee-9fa9-5c9b5c24b079",
        "name": "My cart",
        "description": "my first cart",
        "type": "cart",
        "links": {
            "self": "https://useast.api.elasticpath.com/carts/v2/carts/f52eafaf-123e-4eee-9fa9-5c9b5c24b079"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "without_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                }
            },
            "timestamps": {
                "created_at": "2020-09-09T16:45:28Z",
                "updated_at": "2020-09-09T16:45:28Z",
                "expires_at": "2020-09-20T16:45:28Z"
            }
        },
        "relationships": {
            "items": {
                "data": null
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

## `POST` Create a Preview Cart

```http
https://useast.api.elasticpath.com/v2/carts
```

:::caution
- Once the cart is in preview mode, you cannot revert it to a regular cart.
- Carts with `snapshot_date` are same as preview carts.
- You cannot checkout a cart that includes a `snapshot_date`.
- To delete a promotion preview cart, use [Delete a cart](/docs/carts/cart-management/delete-a-cart) endpoint.
- The promotion preview cart has the same expiration time as a regular cart based on the store's [cart settings](docs/commerce-cloud/carts/cart-management/cart-settings#put-update-cart-settings).
- Preview cart interactions skip inventory checks and events, allowing users to preview future carts without impacting related external systems.
:::

### Parameters

#### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token required to get access to the API. |
| `x-moltin-customer-token` | Optional | `string` | A customer token to be associated with the cart. |

#### Body

| Name          | Required | Type     | Description                            |
|:--------------|:---------|:---------|:---------------------------------------|
| `name`        | Required | `string` | The cart name provided by the customer. A cart name must contain 1 to 255 characters. You cannot use whitespace characters, but special characters are permitted. For more information, see the [Safe Characters](/docs/api-overview/safe-characters) section. |
| `description` | Optional | `string` | The cart description.                  |
| `snapshot_date` | Optional | `string` | This optional parameter sets a reference date for the cart. If this parameter is set, it allows the cart to act as one that might occur on that specified date. For example, such future carts might acquire future-enabled discounts, allowing users to test and validate future interactions with carts. The `snapshot_date` must be in the format `2026-02-21T15:07:25Z`. By default, this parameter is left empty. |

### Request example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \'
     -H "x-moltin-customer-token: XXXX" \'
     -d $ {
      "data": {
        "name": "promotion preview cart",
        "description": "preview promotions",
        "snapshot_date": "2026-09-10T00:12:00Z"
    }
  }
```

### Response Example

`201 Created`

```json
{
    "data": {
        "id": "ebc52c39-a210-466d-a6c8-0759769e45ff",
        "type": "cart",
        "name": "promotion preview cart",
        "description": "preview promotions",
        "snapshot_date": "2026-09-10T00:12:00Z",
        "discount_settings": {
            "custom_discounts_enabled": false
        },
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/carts/ebc52c39-a210-466d-a6c8-0759769e45ff"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "without_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "discount": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "without_discount": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "shipping": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                }
            },
            "timestamps": {
                "created_at": "2023-09-08T18:57:45Z",
                "updated_at": "2023-09-08T18:57:45Z",
                "expires_at": "2023-09-15T18:57:45Z"
            }
        },
        "relationships": {
            "items": {
                "data": null
            }
        }
    }
}
```

## Error Codes

You might encounter the following response codes, depending on the scenario:

- `400 Bad Request` - `Blank name` - The `name` parameter is blank or contains whitespace characters. Specify a valid string.
- `400 Bad Request` - `Name with > 255 characters` - Strings must be less than or equal to 255 characters.
- `400 Bad Request` - `Odd characters` - The `name` parameter cannot contain whitespace characters. Unicode Transformation Format (UTF-8) characters are allowed.


The following error is returned when you checkout a cart with `snapshot_date` :

```json
{
    "errors": [
        {
            "status": 400,
            "title": "Bad Request",
            "detail": "Checking out carts with snapshot dates not permitted"
        }
    ]
}
```

The following error is returned when `snapshot_date` is in the past:

```json
{
    "errors": [
        {
            "status": 400,
            "title": "Invalid Snapshot Date",
            "detail": "Snapshot date must be a date in the future. Targeted snapshot date [2023-09-07 00:12:00 +0000 UTC] is in the past."
        }
    ]
}
```

The following error is returned while updating `snapshot_date` with an empty string:

```json
{
    "errors": [
        {
            "status": 400,
            "title": "Bad Request",
            "detail": "Cannot remove snapshot dates from carts with existing snapshot dates."
        }
    ]
}
```



