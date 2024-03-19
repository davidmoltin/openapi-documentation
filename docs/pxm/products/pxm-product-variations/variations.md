---
title: Product Variations, Options, and Modifiers in Commerce Manager
sidebar_label: Variations, Options and Modifiers in Commerce Manager
sidebar_position: 90
---

Product variations are the options available for a parent product that your shoppers can choose, such as different sizes, colors, materials, or any other specific features. You can create and manage up to 10,000 unique combinations of options for variations of a product. You can then use catalogs to build different catalogs for different users, giving you greater flexibility with your product data and making it easier for your shoppers to interact with your products.

For example, a product has two variations size and color. The size variation has three options, such as small, medium, and large and the color variation has three options, such as green, red, and blue. This creates a variation matrix with nine possible unique combinations or child products as shown in the following example:

![The sizes are across the top row and the colors are in the first column.](/assets/product-variations-1.png)

You can create additional variations or options and attach them to a product to increase the number of combinations. Using the previous example, if you add a third variation with three options, you can build child products with 27 unique combinations of variations and options.

## Reusability

Variations are reusable, and you can associate the same variation to any number of products. The following scenario provides an example:

1. Create a variation `shoe size` and add five options in the variation.
1. Create a product `shoe 1` and associate the variation `shoe size` to the product.
1. Create second product, `shoe 2` and associate the variation `shoe size` to this product as well.
1. Create a third product `shoe 3` and do not associate any variations to this product.

`shoe 1` and `shoe 2` inherit the properties of the `shoe size` variation, and you can build the child products with the options. However, you cannot build child products for `shoe 3` unless you assign a variation with at least one option to the product.

## Including/Excluding Variation Options When Building Child Products

When building your child products, you can choose to exclude or include certain combinations of variation options. This is useful, for example, if you have a variation option that you do not sell. This makes managing and building your child products quick and easy. See [Assigning Variations and Building Child Products](/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products).

## Product Modifiers

Use modifiers to change the properties of child products that are inherited from a product. With modifiers, you only need to have one product with a variation attached to the product.

Modifiers attached to a variation option are applied to a product to create child products. For example, instead of creating three  products for three different shirt colors, you can do the following:

1. Create a product, *shirt*, with the variation, *color*, attached to it.
1. Create three options for the *color* variation.
1. Create a modifier for each option to change the properties of each child product. For example, attach a *description append* modifier to each option so that each child product has a different description based on the color of the child product.
1. Build the child products.

Below is an example of a child product of **T-Shirt** whose description is **Red T-Shirt** because of a modifier for the **Red** option in the **Color** variation.

![Child products with different descriptions](/assets/modifier-description-append.png)

## Price Modifiers

You can use price modifiers to change the price property of child products. By default, child products inherit the same price as their parent products. Using price modifiers, you can enable child products to inherit a different price. This enables you to configure the price of child products, for example, to be lower than its parent product, without having to individually update the price of your child products. There are three types of price modifier.

Modifier | Data Type | Effect |
| :--- | :--- | :--- |
| `price_increment` | `string` | Increases the price of a product. |
| `price_decrement` | `string` | Decreases the price of a product. |
| `price_equals` | `string` | Sets the price of a product to the amount you specify. |

The following is an overview of the steps you need to follow to use price modifiers.

1. Create a price modifier. You must give the price modifier a unique name, for example, tax_modifier. For more information, see [Create a Price Modifier](/docs/pxm/pricebooks/pxm-pricebooks-modifiers/create-a-price-modifier)
1. Create a product modifier that uses the same name as the price modifier. For more information, see [Create Modifiers](/docs/pxm/pricebooks/pxm-pricebooks-modifiers/create-a-price-modifier).
1. Build your child products with the new product modifier. For more information, see [Build Child Products](/docs/pxm/products/pxm-product-variations/build-pxm-variations).

## Best Practices

Do the following to create variations, options, and modifiers:

1. [Create variations](#creating-variations).
1. For each variation, [create options](#creating-variations).
1. (Optional) For each option, [set modifiers](#adding-modifiers-to-options).
1. (Optional) Add price modifiers.
1. [Associate variations to products](/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products).
1. [Build child products](/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products).

:::caution

- If no modifier exists for an option and you build child products using that option, the slug and SKU are autogenerated and appended to the slug and SKU of the child product.
- After updating variation, option, or modifiers, you must [rebuild the child products](/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products) for the changes to take effect.

:::

## Creating Variations and Options

1. Go to **Product Experience Manager > Configurations**.
1. Click the **Variations** tab.
1. Click **Add Variation**.
1. In the **Variation Name** field, enter a name.

    Use only letters, both uppercase and lower case, digits 0 to 9, underscore (_), or hyphen (-) in the name. Do not use any other special characters.

1. Click **Next**.
1. Click **Add Variation Option** where *Variation* is the name of the variation you created above.
1. In the **Variation Name** field, enter the name of the option.

    Use only letters, both uppercase and lower case, digits 0 to 9, underscore (_), or hyphen (-) in the name. Do not use any other special characters.
1. In the **Variation Description** field, enter a description for the option.
1. Click **Add option**.
1. To add more options, repeat steps 6 - 7.

If you update your variations and options for a product, you must [rebuild the child products](/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products) for the changes to take effect.

### Deleting Variations

You can only delete the variations that are not in use. If you try to delete a variation that is still in use, a **One or more variations are currently in use** message is displayed.

If you still want to delete the variation, ensure that the variation is deleted from all products that use the variation.

1. Go to **Product Experience Manager** > **Configurations**.
1. Click the **Variations** tab.
1. Click **...** next to the variation that you want to delete.
1. Click **Delete**.

    A warning message confirming the delete action is displayed.
1. Click **Delete**.

The variation and all options within the variation are deleted. You must [rebuild the child products](/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products) for the product for the changes to take effect. When you rebuild the child products, all child products that contain the variation and options are also deleted.

### Deleting Options

To delete an option in a variation:

1. Go to **Product Experience Manager** > **Configurations**. 
1. Click the **Variations** tab.
1. Click the variation whose options you want to delete.
1. Click the **Options** tab.
1. Click **...** next to the option you want to delete and click **Delete Option**.

You must [rebuild the child products](/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products) for the product for the changes to take effect. When you rebuild child products, all child products generated with this option are deleted from the store.

## Creating Product Modifiers

Modifiers are applied to the child products that are built using the variations and options for which modifiers are created. Modifier values can only contain A-Z, a-z, 0 to 9, -, and _. No spaces or special characters are allowed.

You cannot duplicate a modifier type and operation combination. However, you can add a different operation for the same modifier type. For example, you can only have one SKU builder modifier, but you can add another SKU append modifier to the same option.

To add modifiers to an option:

1. Go to **Product Experience Manager** > **Configurations**.
1. Click the **Variations** tab.
1. Click a variation.
1. Click **Options**.
1. Click **...** next to the option that you want to add a modifier to and click **Edit Modifiers**.
1. The values you can set depend on the modifier you want to use.

    {% table %}
    * Modifier
    * Description
    ---
    * SKU
    * 
      {% list type="checkmark" %}
       * Append - Adds the SKU you specified in **Value** to the end of the child product's SKU.
       * Prepend - Adds the SKU you specified in **Value** to the beginning of the child product's SKU.
       * Equals - Replaces the child product's SKU with the SKU you specified in **Value**.
       * Builder - Replaces part of the child product's SKU. In **Seek**, specify the part of the child product's SKU you want to replace. In **Set**, enter the replacement SKU. 
      {% /list %}
    ---
    * Slug
    *
      {% list type="checkmark" %}
       * Append - Adds the slug you specified in **Value** to the end of the child product's slug.
       * Prepend - Adds the slug you specified in **Value** to the beginning of the child product's slug.
       * Equals - Replaces the child product's slug with the slug you specified in **Value**.
       * Builder - Replaces part of the child product's slug. In **Seek**, specify the part of the child product's slug you want to replace. In **Set**, enter the replacement SKU.
      {% /list %}
    ---
    * Description
    * 
      {% list type="checkmark" %}
       * Append - Adds the description you specified in **Value** to the end of the child product's description.
       * Prepend - Adds the description you specified in **Value** to the beginning of the child product's description.
       * Equals - Replaces the child product's description with the slug you specified in **Value**.
      {% /list %}
    ---
    * Name
    *   
       {% list type="checkmark" %}
        * Append - Adds the name you specified in **Value** to the end of the child product's name.
        * Prepend - Adds the name you specified in **Value** to the beginning of the child product's name.
        * Equals - Replaces the child product's name with the name you specified in **Value**.
       {% /list %}
    ---
    * commodity_type
    * In **Value**, select either **physical** or **digital** to set the commodity type of the child product.
    ---
    * Status
    * In **Value**, select either **live** or **draft** to set the status of the child product.
    ---
    * Price
    * In **Price Modifier Name**, type or paste the name of your price modifier. Make sure the price modifier name exactly matches the price modifier name you specified when creating your price modifier. See [Price Modifiers](/docs/pxm/products/pxm-product-variations/pxm-variations#price-modifiers). 
    {% /table %}

1. Click **Save**.
1. Click **Add another modifier** or click **Cancel** to exit.

### Deleting Product Modifiers 

To delete a modifier:

1. Go to **Product Experience Manager** > **Configurations**.
1. Click the **Variations** tab.
1. Click a variation.
1. Click the **Options** tab.
1. Click **...** next to the option that you want to delete and click **Delete Modifiers**. All modifiers added to the option are displayed.
1. To delete a modifier, click the **Delete** icon next to the **Value** field of that modifier.

You must [rebuild the child products](/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products) for the product for the changes to take effect.

## Demo

{% youtube src="https://www.youtube.com/embed/a1mSUDAxx7k" label="Create Variations and Options" /%}


