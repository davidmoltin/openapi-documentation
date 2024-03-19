---
title: Orders
nav_label: Orders in Commerce Manager
sidebar_position: 40
---

To view all the orders in the store, log into Commerce Manager and go to **STORE > Orders**. You can manage orders on the **All orders** page.

## Viewing Details of a Specific Order

1. On the **All orders** page, do one of the following:

    1. Click an order. 
        
        You can view a product's details by clicking on a product name. This only applies to [products](/docs/pxm/products/pxm-products).
    1. Click **Jump to order** and do the following:
        1. In the **Order ID** field, enter the order ID of the order that you want to view.
        1. Click **Search**.

1. (Optional) To quit the current order page and view details of another order:

    1. Click **Jump to another order** and enter the order ID.
    1. Click **Search**.

    You can see the following details of a specific order on the **View order** tab:

    - Order ID
    - Order items
    - Order status
    - Payment status
    - Shipping status
    - Customer details
    - Billing details
    - Shipping details
    - Details of items in the order
    - Order total
    - Order history
    - Custom fields, if any
    - Shipping groups, if any
 
When an order is associated with one or multiple shipping groups, the following is displayed:

- **Total Shipping Costs** - subtotal, fees, and tax 
- **Total** - amount of order items for each shipping group  

Additionally, each shipping group shows:

- **Shipping Group ID** 
- **Shipping Details**
- **Tracking** information
- **Delivery Instructions**

{% callout  %}
- If there are any shipping groups associated with an order, the shipping details are displayed under the shipping groups. Otherwise, the shipping details are displayed at the top of the order items details.
- For beta release, you cannot edit **Shipping Details** and **Delivery Instructions** for shipping groups associated with an order.
:::

## Anonymizing Orders

You can anonymize orders so that the following information about the order are deleted from the system:

- **Customer Details**
- **Shipping Details**
- **Billing Details**

You can anonymize an order when it is fulfilled, canceled, or fully refunded.

You cannot update or access these information about an order after anonymizing the order.

:::caution
For **Elastic Path Payment Powered by Stripe** customers, refer to the [Stripe Documentation](https://support.stripe.com/questions/i-would-like-to-delete-the-information-stripe-has-collected-from-me) to learn more about how anonymization requests are processed if a customer record is created in Stripe.
:::

Do the following to anonymize an order:

1. On the **All orders** page, click the order that you want to anonymize.
1. Click **Anonymize Order**.
    
    Alternatively, you can select the checkbox for the order, click the elipses, and then select **Anonymize**. You cannot update the order details of an order after anonymizing the order.

1. (Optional) Select the checkbox for multiple orders, and click **Actions** > **Anonymize** to anonymize the selected orders.

## Refunding an Order

You can refund an order directly through your payment gateway, or using Commerce API or Commerce Manager. See [Refunds](/docs/payment/paying-for-an-order/overview#refunds).

On the **View order** tab, you can refund the order directly from Elastic Path Commerce Manager. You can refund partially or the full amount.

1. On the **All orders** page, click an order.
1. On the **View order** tab, click **Refund** in the **View Order History** box.
1. Enter the refund amount.
1. Click **Refund**. 
    
    The payment status of the order is updated to **Refunded**.

Optionally, you can also click **Mark as Refunded** to change the payment status to **Refunded** and then manually process the refund using third-party payment gateways.

## Canceling an Order

You can cancel an unfulfilled order.

1. On the **All orders** page, click an order.
1. On the **View order** tab, click **Cancel Order**.

    A message to confirm the delete action is displayed.
1. Click **Yes, cancel order**.
    The order cancellation message is displayed and the status of the order is updated to **Cancelled**.

Canceling an order does not automatically refund a payment, you must refund the orders manually.

## Updating Shipping Details, Delivery Instructions, and Custom Fields

1. On the **All orders** page, click an order.
1. On the **View order** tab, click the **Edit** icon associated with **Shipping Details** and **Delivery Instructions**.
1. Update the address and delivery instructions as required.
1. Click **Save**.

Depending on the flow configuration for orders, the custom fields are displayed on the **Order details** page. You can enter the required information in these fields. For more information about adding custom fields, see the [Flows](/docs/custom-data/flows) section.

## Filtering Orders

1. On the **All orders** page, click the **Filters** icon.
1. Enter any or all of the following details as required:

    - **Customer ID**: Enter the ID of the customer whose orders you want to see.
    - **Product ID**: Enter the ID of the product to retrieve all orders that has this product. These orders might contain other products too.
    - **Date range**: Enter a date range to view orders during the selected period.
    - **Order status**: Select the order status, such as **complete**, **incomplete**, **cancelled**, or **processing** to view orders with the selected status.
    - **Payment status**: Select a payment status to view all orders with that payment status. You can select **paid**, **unpaid**, **authorized**, **refunded**, **partially_authorized**, or **partially_paid**.
    - **Shipping status**: Select one of the shipping statuses **fulfilled** or **unfulfilled** to view orders with the selected shipping status.
    - **Billing postcode**: Enter a postcode to view all orders related to a specific billing address with this postcode.
    - **Shipping postcode**: Enter a post code to view all orders to a specific shipping address with this postcode.
    - **Customer email**: Enter the email address of a customer to view all orders associated with that customer.
    - **Customer name**: Enter the name of a customer to view all orders associated with that customer.
    - **Account ID**: Enter the ID of an account to view all orders associated with that account.
    - **Account member ID**: Enter ID of an account member to view all orders associated with that account member.

      The **Exact** toggle is enabled by default for **Billing postcode**, **Shipping postcode**, **Customer email**, **Customer name**, **Account ID**, and **Account member ID** to match the exact search criteria. The orders that match the search criteria are displayed.

1. Click **Apply Filters**.

    The selected filters and the results are displayed. You can remove a filter by clicking **X** next to the filter, or you can reset the filter by clicking **Clear All**.

## Exporting Order Details

You can filter orders as required and export the result in a text file in a comma-separated value (CSV) format.

:::caution
Only seller administrators can export order details.
:::

1. On the **All orders** page, click **Manage Export**.

    The **Manage Exports** window with previous export details, if any, is displayed.
1. In the **Manage Exports** window, click **Create export**.

    After completing the export, the status of the export is updated to **Complete**.
1. To download the report, click **Download**.

## Related Resources

- [Orders](/docs/orders/orders)
- [Orders API](/docs/orders/orders-api/orders-api-overview)
- [Shipping Groups](/docs/shipping-groups/Overview)

### Demos

- {% youtube src="https://www.youtube.com/embed/uEI1Cc5yJqI" label="Order Updates in Commerce Manager" /%}
- {% youtube src="https://www.youtube.com/embed/gAk4ny0NZ1Q" label="Shipping Groups" /%}
