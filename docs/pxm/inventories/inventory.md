---
title: Overview
nav_label: Overview
sidebar_position: 10
---

:::caution
The Inventory API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

Inventory is the quantity of each product that you have in stock. The inventory service allows you and your business to keep track of inventory, including a transactional historic log.

Inventory for each product is tracked in terms of the following values:

- Total: The amount of product in stock. (Total = Available + Allocated)
- Available: The amount of product available in the stock minus allocated product. (Available = Total - Allocated)
- Allocated: The amount of reserved product in stock.

:::note
In the **Product Experience Manager**, you can manage the inventory while creating a new product. On the **Products** page > **Inventory** tab, you can specify the inventory details (allocate, deallocate, increment, and decrement). For more information, see [Managing Inventory](/docs/pxm/inventories/inventory).
:::

## Order flow

There are three mandatory steps to a complete an order in relation to inventory:

1. Added to a cart
2. Checked out
3. Paid
4. Shipped (optional)

### Unpaid order flow

The following flowchart depicts the process of an unpaid order.

![The order is created from the cart during the checkout process.](/assets/order-flow.png)

### Payment flow

The following flowchart depicts the process of paying for an order.

![The payment workflow.](/assets/payment-workflow-1.png)

## How stock is managed

When a customer attempts to add products to the cart, the inventory service checks if there is enough available stock. If there is not enough stock available at that time, you will receive a 400 HTTP response with a warning. The response does not describe what products cannot be added, nor does it return how many are in stock at that time.

If a customer successfully adds products to a cart, they can checkout to create an unpaid order. A final check on the available stock is done. After creating the unpaid order, the payment for an order can be taken. When a customer attempts to pay for an order, the inventory service reserves the stock just before the payment is processed internally. Any time before this point of payment, a customer might lose their order, if they are slower than everyone else.

If the payment fails, the temporary stock allocation is removed, and the stock becomes available again for anyone to buy. If the payment succeeds, that stock is still allocated, and the items are the customer’s, unless for any reason they are reallocated before shipment. For example, if the customer cancels, or you realize the order is fraudulent, you can reallocate the inventory. Finally, when the order is marked as shipped, that stock is finally fully decremented. This means the allocation number is reduced, and therefore the total, is no longer in the warehouse.

During split payments, stocks are allocated only if the first transaction for an order is complete. If the transaction fails, the stocks are deallocated. Once the first transaction is complete, the stocks are not allocated for the subsequent transactions as they are already reserved for the order. The stocks are deallocated and return to available when the the order is canceled.

## Implications of the inventories flows

- It is possible for more products to be in carts than there are in stock at that time if the add to cart request quantity is less than available stocks. For example, when available stocks are 100, user can add 60 to cart 1 and then 50 to cart 1, or user A can add 80 to cart 1, while user B can add 30 to cart 2.
- It is possible for more products to be checked out than there are in stock at that time if the the add to cart request quantity is less than available stocks.
- It is not possible for more stock to be paid for than is in stock at that time.
- It is a race for your customers to pay for an order, and whoever does not pay fast enough, is left disappointed.

## Related concepts

- [Orders](/docs/orders/orders)
- [Payments](/docs/payment/payments)
- [Checkout workflow](/docs/checkout/checkout)
- [Inventory API](/docs/pxm/inventories/inventory)
