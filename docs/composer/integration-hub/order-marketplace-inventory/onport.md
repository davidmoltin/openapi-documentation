---
title: Integrating with Onport
nav_label: Onport Integration
sidebar_position: 10
---

You can quickly and easily integrate Commerce with Onport using the **Integrations Hub** in Commerce Manager. Onport supports marketplace and/or dropship vendor models. Integrating Onport with Commerce means you can enable support for marketplace and dropship vendor models in Commerce. The **Onport Integration** supports the following features.

- **Product** changes in Onport causes webhook events to be generated to change product data in Commerce.
- **Inventory** changes in Onport causes webhook events to be generated that increment or decrement inventory in Commerce.
- **Order** changes in Commerce like creating, updating, fulfilling and so on, causes webhook events to be generated that cause orders to be created, updated, fulfilled and so on, in Onport. The following Commerce event types can be used to generate webhook events.

    - `order.created`
    - `order.updated`
    - `order.fulfilled`
    - `order.paid`
    - `order.authorized`

- **Split Orders** orders generated in Commerce causes webhook events to be generated in Onport that allow Onport to split an order based on vendors. 

For more information, watch a video.

{% youtube src="https://www.youtube.com/embed/zi4ewTPiGjU" label="Integrating with Onport" /%}

## Synchonizing Onport Product Data With Commerce Product Data

As part of the Onport Integration, changes in product data in Onport automatically updates product data in Commerce. This is achieved using the Onport Integration Product Template.

1. In Commerce, create your [templates](/docs/pxm/products/extending-pxm-products/templates). Any Onport product attributes should have corresponding attributes in your Commerce templates.
1. When configuring the Onport Integration in **Integrations Hub**, from **Template** page, click **Edit** underneath **Product Template**.
1. Update the **Product Template** to map the Commerce product attributes to the Onport product attributes. For example, suppose you want to save Onport variant id, vendor id and vendor name in Commerce, along with the product clothing material, if that exists.

    The example below shows how this should look in the **Product Template**.

{% escape-code-block %}
```{% process=false %}
    "templates": {
       "products(onport-reference)": {
         "type": "entry",
         "onport_variant_id": "{{variant.id}}",
         "onport_vendor_id": "{{variant.vendorId}}",
         "onport_vendor_name": "{{vendor.name}}"      
       }
    },
    "products(clothing)": {
      "type": "entry",
    {% for customField in customFieldVariants %}
     {% if customField.custom_field.name == "Material" %}
      "material": "{{customField.value}}"
     {% endif %}
    {% endfor %}      
      } 
    }
```
{% /escape-code-block %}

## Synchronizing Commerce Order Data With Onport Order Data

As part of the Onport Integration, changes in orders in Commerce automatically updates order data in Onport. Suppose you are adding shipping charges to an order and the shipping sku is STANDARD-DELIVERY. You must change the Order Template so that this is available in Onport.

1. You must exclude the shipping sku from the line item so that it does not appear as part of the product in Onport.
1. When configuring the Onport Integration in **Integrations Hub**, from **Template** page, click **Edit** underneath **Product Template**. The example below shows how this should look in the **Product Template**.

{% escape-code-block %}
```{% process=false %}
   "lineItems": [
  {% assign exists = false %}
  {% for item in payload.included.items %}
        {% if item.sku != "STANDARD-DELIVERY" and item.meta.display_price.with_tax.unit.amount >= 0 %}
              {% if exists %},{% endif %}
              {% assign exists = true %}
              {
                    "externalId": "{{item.id}}",
                    "name": "{{item.name}}",
                    "quantity": {{item.quantity}},
                    "price": {{item.meta.display_price.with_tax.unit.amount | divided_by: 100}},
                    "taxable": false,
                    "variant": {
                          "sku": "{{item.sku}}",
                          "externalId": "{{item.sku}}"
                    }
              }
        {% endif %}
  {% endfor %}
  ]
```
{% /escape-code-block %}

1. From **Template** page, click **Edit** underneath **Order Template**. The example below shows how this should look in the **Order Template**.

{% escape-code-block %}
```{% process=false %}
   "options": {
  "findOrCreateChannelVariant": true
  }
   {% for item in payload.included.items %}
   {% if item.sku == "STANDARD-DELIVERY" and item.meta.display_price.with_tax.unit.amount >= 0 %}
        ,"shipping": [
              {
                    "code": "shipping-fee",
                    "name": "Shipping Fee",
                    "serviceLevel": "shpping-service-level",
                    "price": {{item.meta.display_price.with_tax.unit.amount | divided_by: 100}}
              }
        ]
  {% endif %}
{% endfor %}
```
{% /escape-code-block %}

## Prerequisites

You must have completed the following tasks in Onport before configuring the integration in Commerce.

### Create an Onport Channel ID

You must provide a custom Onport **Channel ID** when you are configuring the  Onport Integration in **Integrations Hub**. See [Onport Dev Docs](https://composable.jetti.io/).

1. Login to Onport.
1. Go to **Integrations**.
1. Click **Custom Channel** to create a new custom channel. The **Channel ID** forms part of the custom channel URL, once the custom channel is created.

### Retrieve the Onport Custom Channel ID

Once you have created a custom channel ID, you need to retrieve it using `GET /custom-channels/<id>.json` from Onport Custom Channel API where *id* is the channel ID that forms part of the channel URL that you created above. An example response is shown below.

```json
{
  "id": 143,
  "companyId": "3001",
  "channelId": 5365,
  "name": "Commerce",
  "resourceLocation": "null"
}
```

## Collecting Your Setup Information

Before you begin configuring your Onport integration in Commerce Manager, you need to collect the necessary setup information from Onport and Commerce Manager.

### Collecting Onport Setup Information

Collect the following setup information from Onport.

| Option | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Onport API Base URL. Default value is `https://api.jetti.io/api`. |
| **API Key**                       | Your Onport API Key. |

### Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

:::note
When integrating with third-party providers, we recommend you use the closest region in the third-party service to reduce latency as much as possible. See [Regions and URLs table](/docs/api-overview/elastic-path-domains#regions-and-ur-ls).
:::

## Configuring the Onport Integration

Once you have:

- [Understood the prequisites](#prerequisites).
- [Collected your setup information](#collecting-your-setup-information).

You are ready to configure the Onport integration in **Integrations Hub**.

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **Order Management, Marketplace and Inventory Integrations**, click **Onport Integration**. The **Onport** integration guides you through the steps you need to follow to complete the integration.
1. Click **Next**. The **Trigger details** consist of some details about the **Onport** integration.
1. Click **Next**. The **Connection** page is displayed.
1. Complete the information in the **Connection** page.

    - **Client-ID**  - Your Commerce Client ID.
    - **Client-Secret** - Your Commerce Client Secret.
    - **Token URL** - Your Commerce API Token URL.

    1. Click **Connect** to make sure that the authentication is completed successfully.
    1. Complete the **Onport Connection** credentials.

        - **API Base URL**  - Your Onport API Base URL. Default value is `https://api.jetti.io/api`.
        - **API Key** - Your Onport API Key.

    1. In **Onport Channel ID**, provide your Onport Channel ID. See [Create an Onport Channel ID](#create-an-onport-channel-id).
1. Click **Next**. The **Webhook Setup** page is displayed. From this page, decide which webhooks you want to set-up, depending on your requirements. The Onport Integration automatically creates the webhooks, once you have finished configuring the integration.

    :::caution
    Do not change any API keys for the webhooks. The webhooks are authorized using the `configuration.secret_key` value in the request body. Configuring an API key directly on a webhook results in a non-functional integration.
    :::

    1. (Optional) If you want orders in Commerce to be integrated with Onport, turn on the **Enable Order Webhook** toggle.
    1. (Optional) If you want inventory changes in Onport to increment or decrement inventory in Commerce, turn on the **Enable Inventory Webhook** toggle.
    1. (Optional) If you want product changes in Onport to change product data in Commerce, turn on the **Enable Product Webhook** toggle.
    1. If you have turned on the **Enable Order Webhook** toggle, you need to specify the order events that you want to generate webhook events for. In **Order Events**, select the events from the **Value** list. Click **+Add value** to add more events. You can select one or all of the following:

       - `order.created`
       - `order.updated`
       - `order.fulfilled`
       - `order.paid`
       - `order.authorized`

1. Click **Next**. The **Templates** configuration page is displayed. 
1. Click **Edit** for the request template you want to edit. See [Synchonizing Onport Product Data With Commerce Product Data](#synchonizing-onport-product-data-with-elastic-path-commerce-cloud-product-data) and [Synchronizing Commerce Order Data With Onport Order Data](#synchronizing-elastic-path-commerce-cloud-order-data-with-onport-order-data).
1. Click **Finish**. Your integration is enabled.

## Using Onport Integration

To change any configuration details in your Onport integration, open your Onport Integration and go to **Summary** > **Reconfigure**.

In addition, from **Summary**, you can view, pause or delete your Onport integration.

If there is an update to the Commerce Onport integration, a message is displayed in **Summary**. Click **Update** to update your integration. You are guided through the steps to configure your integration.

## Troubleshooting the Onport Integration

You can debug any issues in **Executions**. Click an execution to see the execution details. The **Logs** shows the output and any errors or warnings.

From **Step Outputs**, you can select a step to see its output. You can retry an individual step.
