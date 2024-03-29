---
title: Create Customer-specific Promotions
nav_label: Create customer-specific Promotions
sidebar_position: 6
---

## Prerequisites

- Ensure that you use `customer ID` of the customer in the `user` field when you add the promotion code to the promotion configuration. For more information, see the [Customers](/docs/customer-management/customers) section.

:::note
The default setting for the `automatic` field is `false` and you must create the code manually for the promotion to apply. When this value is set `true`, a code is autogenerated.
:::

## Procedure

1. Create a promotion using one of the following:

    - [Commerce Manager](/docs/promotions/promotions-cm/overview#creating-promotions)
    - [API](/docs/promotions/promotions-overview)

1. [Create a promotion code](/docs/promotions/promotion-codes/create-promotion-codes) for the customer using one of the following:

    - [Commerce Manager](/docs/promotions/promotions-cm/overview#adding-single-code)
    - [API](/docs/promotions/promotion-codes/create-promotion-codes)

1. Apply the coupon code.

The following code shows an example:

```json
{
    "data": {
        "type": "promotion_codes",
        "codes": [
            {
                "code": "2021LOYALTY",
                "user": "794f8c8a-e073-488d-855d-705eb33fa870",
                "uses": 1
            },
            {
                "code": "2021PREFERREDCUSTOMER"
            }
        ]
    }
}
```

Add the `x-moltin-customer-token` header in the request, so the customer can authenticate to the site to use the promotion. For more information, see the [Create Promotion Codes](/docs/promotions/promotion-codes/create-promotion-codes) section.

