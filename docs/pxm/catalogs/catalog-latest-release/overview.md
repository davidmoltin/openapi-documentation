---
title: Catalog Releases Overview
nav_label: Catalog Releases Overview
sidebar_position: 10
---

:::caution
The Catalog API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

Use the Catalog View API to publish a catalog and to retrieve product information.

Publishing a catalog creates a release of that catalog that you can use in an organization or in a specific store or other shopper experience. You can retrieve the hierarchies and the `live` products associated with a catalog release. You can see which parent nodes a product is associated with. This is useful if want to improve how your shoppers search your store, for example.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

## Characteristics of Catalogs:

* Use catalog rules to schedule a catalog to appear during a particular date and time, such as a seasonal catalog. The catalog may have different pricing than the other catalogs. You can have multiple published catalogs.

* If you have defined catalog rules and you want to retrieve a published catalog for a particular channel or a user-defined tag, you must set the appropriate headers in the request:

    - `EP-Channel` - The channel, such as website or mobile app. Corresponds to the `channel` attribute in a [Rule object](/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview#the-rule-object).
    - `EP-Context-Tag` - A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a [Rule object](/docs/pxm/catalogs/catalog-configuration/catalog-configuration-overview#the-rule-object).

* When a catalog is ready to be used in a store, you publish it. For more information, see [Publish a Catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog).
* You can create and publish catalogs for different contexts and channels. You can see the differences between the last 2 consecutive catalog releases. For more information, see [Publish a Catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog).
* You retrieve catalogs for your shopper experience by using the Catalog View API. For more information on how you can retrieve a catalog as a shopper using the Catalog View API, see [Catalog by Shopper Context](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview).
* When a catalog is published for a store, the corresponding events contain `store_id` and `org_id`. For more information, see [Observable Events](/docs/integrations/observable-events).
* When a catalog is published for an organization, the corresponding events contain `org_id`. For more information, see [Observable Events](/docs/integrations/observable-events).

## Understanding How Products And Nodes Are Associated

You can use breadcrumb metadata to understand how products and nodes are associated. This is useful if you want to improve how your shoppers search your store. See [Product and Node Associations](/docs/pxm/catalogs/breadcrumbs).

## The Release Object

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
| `meta` | `object` | The `meta` data includes: `is_full_delta` (see [publish a catalog](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog)), `created_at`, `release_status` and `started_at` attributes. |
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

### The `Links` object

**Product Experience Manager**. A URL to a catalog, node, or product.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `self` | `string` | Refers to the object that calls this object. |

## The `meta` Object

| Attribute | Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :--- | :--- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `is_full_delta` | `boolean` | Indicates whether the release delta file contains the full content of a catalog release. Using a search service as an example, if the `is_full_delta` attribute is `true`, you should remove all data about that catalog release from the search service before injecting fresh data from the `delta` file. If the `is_full_delta` attribute is `false`, then data from the previous catalog release overlays the existing data in the `delta` file. The `is_full_delta` attribute is always `true` the first time a catalog is published. See [Understanding Differences Between Catalog Releases](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog#post-publish-a-catalog).                                          |
| `is_full_publish` | `boolean` | Indicates that a full publish was performed (either because this is the first time a catalog has been published or because of a change that occurred, for example, adding/removing a pricebook or hierarchy). **Note**: When determining whether delta data needs to be refreshed, ignore this attribute and always use the `is_full_delta` attribute.                                                                                                                                                                                                                                                                                                                                                                           |
| `owner` | `string` | The catalog owner, either `organization` or `store`. See [Organizations](/docs/organizations/overview).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `percent_completed` | `integer` | An integer that represents the progress of a catalog pubish. The attribute starts at `0` and reaches `100` when publishing is complete.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `total_nodes` | `integer` | The total number of nodes displayed in a catalog release.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `total_products` | `integer` | The total number of products displayed in a catalog release.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `created_at` | `string($date-time)` | The date and time the catalog release was created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `release_status` | `string` | The status of the current release. Either `PENDING` or `PUBLISHED`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `updated_at` | `string($date-time)` | The date and time the catalog release is updated while a catalog is being published. The attribute is updated every five minutes until publishing is complete.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## The `Relationships` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `delta` | `string` | A URL to a delta document that describes the changes between catalog releases. See [Understanding Differences Between Catalog Releases](/docs/pxm/catalogs/catalog-release-admin/publish-a-catalog#post-publish-a-catalog). |
| `hierarchies` | `string` | A URL to all hierarchies included in this catalog release. |
| `products` | `string` | A URL to all products included in this catalog release. |

