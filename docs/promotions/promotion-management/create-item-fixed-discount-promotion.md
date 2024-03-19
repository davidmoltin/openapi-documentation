---
title: Create Item Fixed Discount Promotion
nav_label: Create Item Fixed Discount Promotion
sidebar_position: 7
---

## `POST` Create Item Fixed Discount Promotions

```http
https://useast.api.elasticpath.com/v2/promotions/
```

:::note
Line-item discounts are only supported by the line calculation method. For more information about this method, see the [Calculation Method](/docs/global-project-settings/settings-overview#calculation-method) section.
:::

## Parameters

### Parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `type` | Required | `string` | Specifies the type of the resource. The type of resource for promotions is, `promotion`. |
 | `name` | Required | `string` | Specifies a name for the promotion. |
 | `description` | Required | `string` | Specifies a description for the promotion. |
 | `enabled` | Required | `boolean` | Specifies whether the promotion is enabled. The options are `true` or `false`, and the default setting is `false`. |
 | `automatic` | Required  | `boolean` | Specifies whether the promotion is applied automatically to the cart or a code is required to apply the promotion. The default setting is `false`. When this value is set `true`, a code is autogenerated. If this value is set `false`, you must create the code manually. For more information about creating codes, see the [Create Promotion Codes](/docs/promotions/promotion-codes/create-promotion-codes) section.|
 |`promotion_type`| Required  |`string`| Specifies the type of the promotion. Use `item_fixed_discount` for the fixed discount for item promotions.|
 |`max_applications_per_cart`| Optional | `integer`| Specifies the maximum number of application of a promotion per cart.|
 |`min_cart_value`| Optional  |`array`| Specifies an array of currency-value objects, `min_cart_value[].currency` and `min_cart_value[].amount`, that provide the minimum cart value required for the promotion to apply. You can add one or several value specifications in different currencies.|
 |`schema`| Required |[`object`](#the-schema-object)| Specifies the list of products to include in the promotion and the discount amount. You can specify the product SKUs of products to apply the promotion. See [the schema object](#the-schema-object). |
 |`start`| Required  |`string`| Specifies the start date and time of the promotion or the start date of the promotion. You can provide a specific time in the HH:MM format. For example, `"start": "2000-01-01 12:00"`. If no time is specified, the default start and end time is set to `00:00`.|
 |`end`| Required  |`string`| Specifies the end date and time of the promotion or the end date of the promotion.|

### The `schema` object

Promotions are defined by schemas that are used internally to verify promotions and calculate discounts. You must define a schema when you create the promotion. For more information, see [the `schema.exclude` criteria](#the-schema-exclude-criteria) and [the targeting fields criteria](#the-targeting-fields-criteria).


| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `schema.currencies[].amount` | Required | `integer` | Specifies the discount amount to be applied for the targeted SKUs. For example, there can be $10 off for the targeted SKU price. |
| `schema.currencies[].currency` | Required | `string` | Specifies a three-letter currency code. For example, USD. |
| `schema.targets` | Required | `array [string]` | Specifies the product SKUs or unique identifiers of the products included in the promotion. You need to define `schema.targets`, `schema.target_nodes` or `schema.target_attributes`, or all three of them to qualify for this promotion. |
| `schema.target_nodes`| Optional | `array [string]` | Specifies the unique identifiers of the nodes to be applied for the promotion in addition to the product SKUs applied in `schema.targets`. You can also define `schema.target_nodes` without defining `schema.targets` if the promotion is intended for a certain node. |
| `schema.target_catalogs` | Optional | `array [string]` | Specifies the unique identifiers of the catalogs to be applied for this promotion. If you do not set this parameter, promotion will be applied to all catalogs. |
| `schema.target_attributes[].template` | Optional | `string` | Specifies the name of the template slug to be included in a promotion. |
| `schema.target_attributes[].field` | Optional | `string` | Specifies the unique slug identifier for the field to be included in a promotion. |
| `schema.target_attributes[].type` | Optional | `string` | Specifies the type of the field, such as `string`, `integer`, `boolean`, `float`, or `date`. |
| `schema.target_attributes[].value` | Optional | Depending on the type of the field, value can be `string`, `integer`, `boolean`, `float`, or `date`. | Specifies the value of the field that was specified in the `attributes.type`. For example, you can specify any color in the value if you indicate color in the `attributes.field`. |
| `schema.exclude.targets` | Optional | `array [string]` | Specifies the product SKUs to be excluded from the promotion. If you use `schema.target_nodes`, individual SKUs might be excluded from the promotion. |
| `schema.exclude.nodes` | Optional | `array [string]` | Specifies the unique identifiers of the nodes to be excluded from the promotion. |
| `schema.exclude.attributes[].template` | Optional | `string` | Specifies the name of the template slug to be excluded from a promotion. |
| `schema.exclude.attributes[].field` | Optional | `string` | Specifies the unique slug identifier for the field to be excluded from a promotion. |
| `schema.exclude.attributes[].type` | Optional | `string` | Specifies the type of the field, such as `string`, `integer`, `boolean`, `float`, or `date` .|
| `schema.exclude.attributes[].value` | Optional | Depending on the type of the field, value can be `string`, `integer`, `boolean`, `float`, or `date`. | Specifies the value of the field that was specified in the `attributes.type`. For example, you can specify any color in the value if you indicate color in the `attributes.field`. |
| `schema.target_conditions` | Optional | `array [object]` |  Specifies `and`/`or`  conditions on nodes and attributes to be included in a promotion. For example, if you want to include t-shirts and pants that are blue or green in color from a promotion, the items that you wish to include should be in `node-t-shirts` or `node-pants` and have the `color` attribute  with the value `blue` or `green`. |
| `schema.target_conditions.or` | Optional | `array [object]` | Specifies `or` conditions on nodes and attributes to be  included in a promotion. You can include up to 10 `and` conditions inside an `or` array.|
| `schema.target_conditions.or[].and`| Optional | `array[object]` | Specifies `and` conditions on nodes and attributes to be included from the promotion. You can only have five items inside an `and`condition. |
| `schema.target_conditions.or[].and[].node` | Optional | `object` | Includes `values` field to specify the unique identifiers of the nodes to be included in the promotion. |
| `schema.target_conditions.or[].and[].attribute` |  Optional | `object` | Specifies `template`, `field`, `type`, and `values` of the attribute to be included in the promotion. |
| `schema.exclude.conditions` | Optional | `object` | Specifies `and`/`or`  conditions on nodes and attributes to be excluded from a promotion. For example, if you want to exclude t-shirts and pants that are blue or green in color from a promotion, the items that you wish to exclude should be in `node-t-shirts` or `node-pants` and have the `color` attribute  with the value `blue` or `green`.|
| `schema.exclude.conditions.or` | Optional | `array [object]` | Specifies `or` conditions on nodes and attributes to be excluded from a promotion. You can include up to 10 `and` conditions inside an `or` array. |
| `schema.exclude.conditions.or[].and`| Optional | `array[object]` | Specifies `and` conditions on nodes and attributes to be excluded from a promotion. You can only have five items inside an `and`condition. |
| `schema.exclude.conditions.or[].and[].node` | Optional | `object` | Includes `values` field to specify the unique identifiers of the nodes to be excluded from the promotion. |
| `schema.exclude.conditions.or[].and[].attribute` | Optional | `object` | Specifies `template`, `field`, `type`, and `values` of the attribute to be excluded from the promotion. |

## Request Example

```bash
curl -X POST 'https://useast.api.elasticpath.com/v2/promotions' \
     -H "Authorization: Bearer 96d8bcaca17a2db01b44b16de520a4765acad1b4' \
     -H 'accept: application/json' \
     -H 'content-type: application/json' \
     -d $'{
         "data": {
           "type": "promotion",
           "name": "Item fixed discount promotion example",
           "description": "$50 for SKU1",
           "enabled": true,
           "automatic": false,
           "promotion_type": "item_fixed_discount",
           "max_applications_per_cart": 0,
           "schema": {
             "currencies": [
               {
                 "amount": 5000,
                 "currency": "USD"
               }
             ],
             "targets": ["sku1"],
             "target_nodes": ["node-1"],
             "target_catalogs" : ["{{catalodId}}"],
             "target_attributes":[
                {
                 "template": "products(shoes)",
                 "field": "brand",
                 "type": "string",
                 "value": "adidas"
               }
             ],
             "target_conditions": {
                "or": [
                    {
                        "and": [
                            {
                                "node": {
                                    "values": [
                                        "928c9f9b-29a0-4a4a-b339-8b2e981a14ad",
                                        "1e969e87-80d3-4f1a-80d8-a2a301eac983",
                                        "08b58e20-70d1-4c37-b61f-d5315d492a60"
                                    ]
                                }
                            },
                            {
                                "attribute": {
                                    "template": "products(shoes)",
                                    "field": "brand",
                                    "type": "string",
                                    "values": [
                                        "puma"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
             "exclude": {
                 "targets":["sku2"],
                 "nodes": ["node2"],
                 "attributes": [
                     {
                 "template": "products(shoes)",
                 "field": "brand",
                 "type": "string",
                 "value": "nike"
                   }
               ],
                "conditions": {
                    "or": [
                        {
                            "and": [
                                {
                                    "node": {
                                        "values": [
                                            "1e969e87-80d3-4f1a-80d8-a2a301eac983"
                                        ]
                                    }
                                },
                                {
                                    "attribute": {
                                        "template": "products(shoes)",
                                        "field": "isResale",
                                        "type": "boolean",
                                        "values": [
                                            true
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        },
        "start": "2000-01-01",
        "end": "2100-01-01"
    }
}'
```

## Response Example

`201 Created`

```json
{
    "data": {
        "type": "promotion",
        "id": "8d46d32a-6ca7-4e9c-a743-e4f8c25eb437",
        "parent_id": "8d46d32a-6ca7-4e9c-a743-e4f8c25eb437",
        "name": "Item fixed discount promotion example",
        "description": "$50 for SKU1",
        "enabled": true,
        "current": true,
        "promotion_type": "item_fixed_discount",
        "schema": {
            "targets": [
                "sku1"
            ],
            "currencies": [
                {
                    "currency": "USD",
                    "amount": 5000
                }
            ],
            "target_catalogs": [
                "{{catalodId}}"
            ],
            "target_nodes": [
                "node-1"
            ],
            "target_attributes": [
                {
                    "template": "products(shoes)",
                    "field": "brand",
                    "type": "string",
                    "value": "adidas"
                }
            ],
            "target_conditions": {
                "or": [
                    {
                        "and": [
                            {
                                "node": {
                                    "values": [
                                        "928c9f9b-29a0-4a4a-b339-8b2e981a14ad",
                                        "1e969e87-80d3-4f1a-80d8-a2a301eac983",
                                        "08b58e20-70d1-4c37-b61f-d5315d492a60"
                                    ]
                                }
                            },
                            {
                                "attribute": {
                                    "template": "products(shoes)",
                                    "field": "brand",
                                    "type": "string",
                                    "values": [
                                        "puma"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "exclude": {
                "targets": [
                    "sku2"
                ],
                "nodes": [
                    "node2"
                ],
                "attributes": [
                    {
                        "template": "products(shoes)",
                        "field": "brand",
                        "type": "string",
                        "value": "nike"
                    }
                ],
                "conditions": {
                    "or": [
                        {
                            "and": [
                                {
                                    "node": {
                                        "values": [
                                            "1e969e87-80d3-4f1a-80d8-a2a301eac983"
                                        ]
                                    }
                                },
                                {
                                    "attribute": {
                                        "template": "products(shoes)",
                                        "field": "isResale",
                                        "type": "boolean",
                                        "values": [
                                            true
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        },
        "start": "2000-01-01T00:00:00Z",
        "end": "2100-01-01T00:00:00Z",
        "created_by": "seller@elasticpath.com",
        "updated_by": "another_seller@elasticpath.com",
        "meta": {
            "timestamps": {
                "created_at": "2023-02-02T19:54:33.031Z",
                "updated_at": "2023-02-02T19:54:33.031Z"
            }
        }
    }
}
```

## The `schema.exclude` criteria

When creating a promotion, you can specify when it **should not** be applied. The promotion will not be applied on any cart (or cart item, depending on the promotion type) that fulfills at least one of the `schema.exclude` criteria. 
The following criteria can be set to exclude items from a promotion:

- `schema.exclude.targets`
- `schema.exclude.nodes`
- `schema.exclude.attributes`
- `schema.exclude.conditions`

For example, if you want to create a promotion with value as *SKU1* in `schema.exclude.targets` and and color *yellow* and size *small* in `schema.exclude.attributes`, then any products with *SKU1* or the color *yellow* or the size *small* will be excluded from the promotion.

To exclude products from a promotion based on multiple conditions at the same time, use `schema.exclude.conditions`. For example, use `schema.exclude.conditions` to exclude items that are both *yellow* in color and *small* in size.

## The targeting fields criteria

When creating a promotion, you can also specify when it **should** be applied. To define the targeted products, use the following fields:

- `schema.target_catalogs`
- `schema.targets`
- `schema.target_nodes`
- `schema.target_attributes`
- `schema.target_conditions`

The cart item's catalog is verified if you define the `schema.target_catalogs` field. If the item is in any of the targeted catalogs specified in `schema.target_catalogs`, the promotion will be applied. If the item is not in any of the catalogs, the promotion will not be applied.

Then, the cart item is verified to see if it fulfills at least one criteria of any of the four other targeting fields. In other words, the `schema` targeting fields such as `schema.targets`, `schema.target_nodes`, `schema.target_attributes` and `schema.target_conditions` create *OR* trageting conditions.

For example, if you create a promotion with values as *SKU1* in `schema.targets` and color *yellow* and size *small* in `schema.target_attributes`, then it will be applied to any products with *SKU1* or the color *yellow* or the size *small*.

To create a promotion that targets products based on multiple conditions at the same time, use `schema.target_conditions`. For example, use it to target items that are both *yellow* in color and *small* in size.