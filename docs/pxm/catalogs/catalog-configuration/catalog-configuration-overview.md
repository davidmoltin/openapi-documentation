---
title: Catalogs API Overview
nav_label: Catalogs API Overview
sidebar_position: 10
---

:::caution
The Catalog API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

Use the Catalogs API to create, manage, and publish catalogs for an organization or a store. When you publish a catalog for a store, you can define catalog rules so that you can show catalogs with different pricing or different products to preferred customers or channels.

### Hierarchies

Use the Products API and Hierarchies API to create a hierarchy of products that can be included in a catalog. You can also specify the order you want your hierarchies to display in a published catalog. You can order your hierarchies on a catalog-by-catalog basis.

![Hierarchy_sorting](/assets/hierarchy_sorting.png)

For more information, see [Update a Catalog](/docs/pxm/catalogs/catalog-configuration/update-a-catalog).

#### Understanding How Products And Nodes Are Associated

You can use `breadcrumb` metadata to understand how products and nodes are associated. This is useful if you want to improve how your shoppers search your store. See [Product and Node Associations](/docs/pxm/catalogs/breadcrumbs).

### Pricebooks

A price book contains the prices for each of the products in the catalog. You can create multiple price books for different scenarios, such as seasonal sales, business versus retail customer pricing, and reward programs. If you have multiple price books, when a catalog is published, you can configure a priority for your price books. Product prices are displayed in the catalog according to the priority of the price books. See [Create a catalog](/docs/pxm/catalogs/catalog-configuration/create-a-catalog).

### Publishing catalogs

When you publish a catalog, the `live` products in the hierarchies appear in a catalog release. A catalog release provides a snapshot of product information taken at the time of publication. You can have one or more catalog releases available in your store. 

If you have more than one catalog published for your store, use catalog rules to specify when to display each catalog. For example, you can use [catalog rules](/docs/pxm/catalogs/catalog-rules/catalog-rules) to schedule a catalog to appear during a particular date and time, such as a seasonal catalog. The catalog may have different pricing than the other catalogs. You can have multiple published catalogs.

When a catalog is ready to be used in a store, you publish it. You can create and publish catalogs for different contexts and channels. You can see the differences between the last 2 consecutive catalog releases. See [Publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog).

You retrieve catalogs for your shopper experience by using the [Catalog View API](/docs/pxm/catalogs/catalog-latest-release/overview).

## The `Catalog` object

**Product Experience Manager**. Identifies the catalog, its product hierarchies, and a price book.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the catalog. |
| `type` | `string` | The type of object being returned. Always: `catalog` |
| `attributes.name` | `string` | The name of the catalog. |
| `attributes.description` | `string` | A description of the catalog, such as the purpose for the catalog. |
| `attributes.hierarchy_ids` | `[string]` | The unique identifiers of the hierarchies to associate with this catalog.  |
| `attributes.pricebook_id` | `string` | The unique identifier of the price book to associate with this catalog. If no price book is selected, the catalog is displayed without prices. |
| `attributes.owner` | `string` | The catalog owner, either `organization` or `store`. See [Organizations](/docs/organizations/overview). |
| `attributes.created_at` | `string($date-time)` | The date and time the catalog was created. |
| `attributes.updated_at` | `string($date-time)` | The date and time the catalog was updated. |
| `attributes.published_at` | `string($date-time)` | If published, the date and time the catalog was published. |
| `relationships` | [`object`](#the-relationships-object) | A URL to the delta document, hierarchies, and products. |
| `links` | [`object`](#the-links-object) | A URL to the catalog. |

## The `Release` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | A unique identifier for the node. |
| `type` | `string` | The type of object being returned. Always: `catalog-release`. |
| `attributes.hierarchy_ids` | `[array]` | An array of references to the hierarchies in the release. |
| `catalog_id` | `string` | A unique identifier for the catalog. |
| `attributes.description` | `string` | A description of the node, such as the name of a category. |
| `attributes.name` | `string` | The name of the release. |
| `attributes.curated_products` | `[array]` | An array of product IDs whose products are curated. See [Curated Products](/docs/pxm/products/pxm-products#curated-products). |
| `attributes.published_at` | `string($date-time)` | The date and time the release was published. |
| `meta` | (#the-meta-object) | The `meta` data includes: `is_full_delta` (see [publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog)), `created_at`, `release_status` and `started_at` attributes. |
| `relationships` | `object` | The `relationships` data for the catalog.  |

## The `components` Object

{% expandable-info title="Important" %}

- Custom names and values prefixed with `$` are not supported.
- You cannot have more than 1500 options in a bundle. 

{% /expandable-info %}

| Name | Type | Description |
| :--- | :---| :--- |
| `component: <key>` | `string` | The name of the component, such as `games`. The `bundle_configuration` uses the component key to reference a component. A component key should be relatively short and must not contain any special characters. See [create a bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |
| `component: <key>: min` | `integer` | The minimum number of product options a shopper can select from this component. |
| `component: <key>: max` | `integer` | The maximum number of product options a shopper can select from this component. |
| `component: <key>: sort_order` | `integer` | The sort order of the components. The `create a bundle` and `update a bundle` endpoints do not sort the components. You can use the `sort_order` attribute when programming your storefront to display the components in the order that you want. |
|`component: <key>: name` | `string` | The component name. The component name is the name that is displayed in your storefront. See [create a bundle](/docs/pxm/products/pxm-bundles/pxm-bundles-api/create-a-bundle). |
| `component: <key>: options` | `array` | The product options included in a component. This can be the ID of another bundle. See [Bundles of Bundles](/docs/pxm/products/pxm-bundles/bundles-of-bundles). |

## The `meta` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `is_full_delta` | `boolean` | Indicates if this is a full publish of the catalog. Using a search service as an example, if the `is_full_delta` attribute is `true`, you should remove all data about that catalog from the search service before injecting fresh data from the `delta` file. If the `is_full_delta` attribute is `false`, then data from the previous catalog overlays the existing data in the `delta` file. The `is_full_delta` attribute is always `true` the first time a catalog is published. See [Understanding Differences Between Catalog Releases](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog#post-publish-a-catalog). |
| `is_full_publish` | `boolean` | Indicates that a full publish was performed (either because this is the first time a catalog has been published or because of a change that occurred, for example, adding a new pricebook). **Note**: When determining whether delta data needs to be refreshed, ignore this attribute and always use the `is_full_delta` attribute. |
| `owner` | `string` | The catalog owner, either `organization` or `store`. See [Organizations](/docs/organizations/overview). |
| `percent_completed` | `integer` | An integer that represents the progress of a catalog pubish. The attribute starts at `0` and reaches `100` when publishing is complete. |
| `total_nodes` | `integer` | The total number of nodes displayed in a catalog release. |
| `total_products` | `integer` | The total number of products displayed in a catalog release. |
| `created_at` | `string($date-time)` | The date and time the catalog release was created. |
| `release_status` | `string` | The status of the current release. Either `PENDING` or `PUBLISHED`. |
| `updated_at` | `string($date-time)` | The date and time the catalog release is updated while a catalog is being published. The attribute is updated every five minutes until publishing is complete. |

### The `Links` object

**Product Experience Manager**. A URL to a catalog, node, or product.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `self` | `string` | Refers to the object that calls this object. |

## The `Relationships` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `delta` | `string` | A URL to a delta document that describes the changes between catalog releases. See [Understanding Differences Between Catalog Releases](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog#post-publish-a-catalog). |
| `hierarchies` | `string` | A URL to all hierarchies included in this catalog release. |
| `products` | `string` | A URL to all products included in this catalog release. |

## The `Rule` object

If you have multiple catalogs, add catalog rules. A catalog rule defines the circumstances under which you want to display a catalog to a customer. For example, the catalog rule could be preferred customers or mobile apps or both. If you create catalog rules, be sure to create a base catalog rule to use when no other catalog rule fits the shopper request. A base catalog rule is defined with a `type`, `name`, and `catalog_id` only.

:::note
If you have one catalog for all customers and channels, you can omit creating this object.
:::

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | The type of object being returned. Always: `catalog_rule` |
| `attributes.name` | `string` | The name of the rule without spaces. |
| `attributes.description` | `string` | The purpose for this rule. |
| `attributes.catalog_id` | `string` | The unique identifier for the catalog to display in this rule. **V2** If you want to display a catalog that contains v2 Products, Brands, Categories, and Collections, specify `legacy`. |
| `attributes.account_ids` | `[array]` | Specifies the list of accounts who are eligible to see this catalog. If this field is empty, the rule matches all accounts. |
| `attributes.customer_ids` | `[array]` | The list of customers who are eligible to see this catalog. If empty, the rule matches all customers. |
| `attributes.channels` | `[array]` | The list of channels in which this catalog can be displayed. A channel is the shopping experience, such as a mobile app or web storefront. If empty, the catalog rule matches all channels. The channel will eventually be included in the bearer token that is used for authorization, but currently, you must set the `EP-Channel` header in your requests. |
| `attributes.tags` | `[array]` |  A list of user-defined tags that can be used to further restrict the eligibility criteria for this rule. Requests populate the catalog rule tag using the `EP-Context-Tag` header. |
| `attributes.schedules` | `[array]` | Specifies a time period when a catalog is displayed, such as on a specific date or during summer. Requests populate the rule tag using  the `EP-Context-Tag` header. The `schedules` attribute must include `valid_from` and `valid_to`. `valid_from` matches the date and time that the catalog is displayed from. `valid_to` matches the date and time the catalog is displayed to. Commerce runs on UTC time. You can offset the timezone by adding the offset to the end of the date and time. For example, a catalog which contains a sale hierarchy that should appear for a set timeframe may be scheduled to publish on a given date and time within a given timezone. For instance, a sale that should begin on 1st of June 2022 05:00 ET and end on the 15th of June 2022 at 23:50 PT would have a valid schedule of `"valid_from": "2022-06-01T05:00:00.000-05:00",`  `"valid_to": "2022-06-15T11:59:99.000-08:00"` |

### Resolving catalog rules

When there is a request for a catalog, the store displays the catalog with the rule that matches the most attributes of the shopperʼs context.

The request triggers the following steps:

1. Compares the shopperʼs context against the defined catalog rules.
1. Determines the best match.
1. Retrieves the catalog associated with the matching catalog rule.

The follow examples show how the best match might be resolved:

- A shopper matches one of the `customer_ids` in one catalog rule only. The catalog for that catalog rule is displayed.
- A shopper matches one of the `customer_ids` in one catalog rule only, but doesnʼt match any of the `tags` specified in that catalog rule. Because there are no other catalog rules for this `customer_id`, the catalog for the catalog rule is displayed because it is the best match.
- A shopper is browsing a store using the storeʼs mobile app, which matches `channel=mobile` in two catalog rules. The catalog displayed depends on matches with the `tags` or `customer_ids` attributes. If there is no other matching attribute, the first catalog rule found by the store is used. The best practice is to create catalog rules that cover all cases so that you avoid this situation.
- An unknown shopper is browsing the only channel offered by the seller. The store displays the base catalog.
