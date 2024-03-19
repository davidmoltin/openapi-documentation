---
title: Overview
nav_label: Overview
sidebar_position: 10
---

Commerce provides authentication tokens for anyone using the [Account Management APIs](/docs/accounts/using-account-management-api/account-management-api-overview), including accounts and account members.

For each element in the list returned by the account member authentication API, a `token` value is returned. Use the `token` value to implicitly read, create, or update the resources that are linked to the selected [account](/docs/accounts/using-account-management-api/account-management-api-overview) and [account members](/docs/accounts/using-account-members-api/overview).

You can use these tokens as the value to the `EP-Account-Management-Authentication-Token` header with the [Checkout](/docs/checkout/checkout-workflow) endpoint.
