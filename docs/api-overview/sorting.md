---
title: Sorting
nav_label: Sorting
sidebar_position: 100
---

Many Commerce endpoints support sorting.  The general syntax of sorting within the API is described below.

Sorting is also supported within [JavaScript SDK](/docs/api-overview/sdk).

## Usage and Syntax

### Query parameters

| Name           | Required | Type     | Description                                                              |
|:---------------|:---------|:---------|:-------------------------------------------------------------------------|
| `sort`         | Optional | `string` | The attribute to sort by. Supported attributes differ based on endpoint. |


## Supported Endpoints

* [Get All Accounts](/docs/accounts/using-account-management-api/get-all-accounts)
* [Get All Account Members](/docs/accounts/using-account-members-api/get-all-account-members)
* [Get All Account Memberships](/docs/accounts/using-account-membership-api/get-all-account-memberships)
* [Get all User Authentication Info](/docs/authentication/single-sign-on/user-authentication-info-api/get-all-user-authentication-info)
* [Get all Customers](/docs/customer-management/customer-managment-api/get-all-customers)
* [Get all Orders](/docs/orders/orders-api/get-all-orders)
