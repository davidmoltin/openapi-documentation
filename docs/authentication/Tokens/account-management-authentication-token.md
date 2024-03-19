---
title: Account Management Authentication Token
nav_label: Account Management
sidebar_position: 4
---

Account Management authentication tokens are available for anyone using the [Account Management APIs](/docs/accounts/using-account-management-api/account-management-api-overview).

For each element in the list returned by the account member authentication API, a `token` value is returned. Use the `token` value to implicitly read, create, or update the resources that are linked to the selected [account](/docs/accounts/using-account-management-api/account-management-api-overview) and [account members](/docs/accounts/using-account-members-api/overview).

You can use these tokens as the value to the `EP-Account-Management-Authentication-Token` header with the [Checkout](/docs/accounts/using-account-management-api/account-member-authentication#using-a-token) endpoint.

For more information on implementing account management authentication tokens, see [Account Management Authentication Tokens](/docs/accounts/using-account-management-api/account-member-authentication).
