---
title: Get all Nodes
nav_label: Get all Nodes
sidebar_position: 70
---

## `GET` Get all Nodes

```http
https://useast.api.elasticpath.com/catalog/nodes
```

Returns all nodes in the catalog.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview#resolving-catalog-rules).

You can see the parent nodes a node is associated with in the `bread_crumb` metadata for each node. This is useful if you want to improve how your shoppers search your store, for example. For more information, see [Catalog Releases Overview](/docs/pxm/catalogs/catalog-latest-release/overview).

In a catalog, you can use a filter to return a list of nodes in a hierarchy structure that a product belongs to. You can use this to build breadcrumbs in your storefront. For more information, see [Building breadcrumbs in a storefront
](#building-breadcrumbs-in-a-storefront).

The response lists the products associated with the nodes. If products are [curated](/docs/pxm/products/curating-products), they are displayed in `curated_products`. Product curation allows you to promote specific products within each of your hierarchies, enabling you to create unique product collections in your storefront. 

- You can only curate 20 products or less. You cannot have more than 20 curated products.
- If a curated product is removed from a node, the product is also removed from the `curated_products` list. 

## Parameters

### Headers

| Name                      | Required | Type     | Description                |
|:--------------------------|:---------|:---------|:---------------------------|
| `Authorization`           | Required | `string` | The Bearer token to grant access to the API. The Implicit Bearer token returns only resources with a `live` status. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Channel`              | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag`          | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |
| `accept-language` | Optional | `string` | The natural language and locale that your storefront prefers. See [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). |

### Query parameters

| Name           | Required | Type     | Description                           |
|:---------------|:---------|:---------|:--------------------------------------|
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]`  | Optional | `integer` | The number of items to return per page. Minimum value is `1`. See [Pagination](/docs/api-overview/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/docs/api-overview/pagination). |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Operator  | Description | Attributes | Example |
| --- | --- | --- | --- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. | `name`, `slug` | `/pcm/catalogs/{{catalogId}}/releases/latest/hierarchies?filter=eq(name,some-name)` |
| `in`      |  Checks if the values are included in the specified string. If they are, the condition is true.  | `Id` | `/catalogs/6dff977e-a8c4-4e32-8d2c-407266dde6dd/nodes/36bb85d0-4b7c-4667-a933-a4ff714f9282/products?filter=in(id,9214719b-17fe-4ea7-896c-d61e60fc0d05,e104d541-2c52-47fa-8a9a-c4382480d97c,65daaf68-ff2e-4632-8944-370de835967d)` | 

For more information, see [Filtering](/docs/api-overview/filtering).

### Building breadcrumbs in a storefront

In a catalog, you can use a filter to return a list of nodes in a hierarchy structure that a product belongs to. You can use this to build breadcrumbs in your storefront. An example is shown below.

`filter=in(id,c83bfe55-0d87-4302-a86d-ab19e7e323f1,6003d7ef-84f3-49bb-a8bd-4cbfa203dcbb)`

- Specify the node Ids in the filter expression.
- You can have as many node Ids as you want.
- It does not matter what order you specify the node Ids. The nodes are returned in the order they were last updated.

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/catalog/nodes \
     -H "Authorization: Bearer XXXX" \
     -H "EP-Channel: web store" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-05T21:45:28.395Z",
                "description": "Free-standing appliances",
                "name": "Major Appliances",
                "slug": "Major-Appliances-MA0",
                "curated_products": [
                  "57ddfc7c-81c1-4855-88a5-2dd9d2055897",
                  "42d940f9-fe26-4eed-9070-5e00234febe5",
                  "2ab84aa8-232c-4199-8cc5-e1554ff58884"
                ],
                "updated_at": "2021-03-05T22:15:44.684Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "meta": {
                "bread_crumb": [
                  "04e748f1-83db-4013-85c8-9edfb0e1b5fa",
                  "94b882fa-85de-470e-acb3-5b11358e02de",
                  "a96a898b-444c-40b6-9c27-5fc74d08e685"
                ]
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/products"
                    }
                }
            }
        },
        {
            "id": "39f96a3f-5577-473f-a263-f21fb2013469",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-08T17:50:14.629Z",
                "description": "All cooling units for food",
                "name": "Refrigerators",
                "slug": "Refrigerators-MA1",
                "updated_at": "2021-03-08T17:50:14.629Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "meta": {
              "bread_crumb": [
                  "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
              ]
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/products"
                    }
                }
            }
        },
        {
            "id": "55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-08T17:33:36.070Z",
                "description": "Electric stoves and ovens",
                "name": "Electric Ranges",
                "slug": "Electric-Ranges-MA2",
                "updated_at": "2021-03-08T17:33:36.070Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "meta": {
              "bread_crumb": [
                  "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
              ]
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/d167d384-d2cf-4d05-ad41-6fc567855765"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df/relationships/products"
                    }
                }
            }
        },
        {
            "id": "de3c3590-4138-4943-b04d-d7b7dc48fa54",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-11T21:22:55.262Z",
                "description": "Gas stoves and ovens",
                "name": "Gas Ranges",
                "slug": "Gas-Ranges-MA2",
                "updated_at": "2021-03-12T22:11:08.709Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "meta": {
              "bread_crumb": [
                  "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
              ]
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/products"
                    }
                }
            }
        },
        {
            "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-05T21:48:32.874Z",
                "description": "All stoves and ovens",
                "name": "Ranges",
                "slug": "Ranges-MA1",
                "updated_at": "2021-03-05T21:48:32.874Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "meta": {
              "bread_crumb": [
                  "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
              ]
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/products"
                    }
                }
            }
        }
    ],
    "links": {
        "first": "/catalog/nodes?page[offset]=0&page[limit]=25&",
        "last": "/catalog/nodes?page[offset]=0&page[limit]=25&",
        "self": "/catalog/nodes"
    }
}
```
