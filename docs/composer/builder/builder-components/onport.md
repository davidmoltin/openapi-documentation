---
title: Onport Component
nav_label: Onport
sidebar_position: 130
---

Onport supports marketplace and/or dropship vendor models. Integrating Onport with Commerce means you can enable support for marketplace and dropship vendor models in Commerce. The **Onport Integration** supports the following features.

- **Product** changes in Onport causes webhook events to be generated to change product data in Commerce.
- **Inventory** changes in Onport causes webhook events to be generated that increment or decrement inventory in Commerce.
- **Order** changes in Commerce like creating, updating, fulfilling and so on, causes webhook events to be generated that cause orders to be created, updated, fulfilled and so on, in Onport. The following Commerce event types can be used to generate webhook events.

    - `order.created`
    - `order.updated`
    - `order.fulfilled`
    - `order.paid`
    - `order.authorized`

- **Split Orders** orders generated in Commerce causes webhook events to be generated in Onport that allow Onport to split an order based on vendors. 

## Connections

Collect the following setup information from Onport.

| Option | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Onport API Base URL. Default value is `https://api.jetti.io/api`. |
| **API Key**                       | Your Onport API Key. |

## Actions

The component has the following actions.

### Manual Sale 

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Onport connection. | 
| **Channel ID** | `string` | Your Onport Channel ID. See [Create an Onport Channel ID](/docs/composer/integration-hub/order-marketplace-inventory/onport#create-an-onport-channel-id). | 
| **Order Request** | `string` | As part of the Onport Integration, changes in orders in Commerce automatically updates order data in Onport. See [Synchronizing Commerce Order Data With Onport Order Data](/docs/composer/integration-hub/order-marketplace-inventory/onport#synchronizing-elastic-path-commerce-cloud-order-data-with-onport-order-data). | 

### Update Inventory Endpoint

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Onport connection. | 
| **Custom Channel ID** | `string` | Your Onport Channel ID. See [Create an Onport Channel ID](/docs/composer/integration-hub/order-marketplace-inventory/onport#create-an-onport-channel-id). | 
| **Inventory Endpoint** | `string` | Changes in inventory in Onport automatically updates inventory data in Commerce. | 

### Update Publishing Endpoint

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Onport connection. | 
| **Custom Channel ID** | `string` | Your Onport Channel ID. See [Create an Onport Channel ID](/docs/composer/integration-hub/order-marketplace-inventory/onport#create-an-onport-channel-id). | 
| **Publishing Endpoint** | `string` | As part of the Onport Integration, changes in product data in Onport automatically updates product data in Commerce. See [Synchonizing Onport Product Data With Commerce Product Data](/docs/composer/integration-hub/order-marketplace-inventory/onport#synchonizing-onport-product-data-with-elastic-path-commerce-cloud-product-data). | 
