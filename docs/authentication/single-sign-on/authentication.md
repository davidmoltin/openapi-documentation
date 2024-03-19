---
title: Authentication Management in Commerce Manager
nav_label: Authentication Management in Commerce Manager
sidebar_position: 110
---

The Authentication Management tab is used to configure one or more single sign-on authentication providers. Single sign-on is used to verify a user’s identity using the OpenID Connect protocol, without saving user information such as a password.

:::caution
Changing these settings affects how customers authenticate with your store. Any misconfiguration might prevent users from authenticating.
:::

For more information, see [Single sign-on and authentication](/docs/authentication/single-sign-on/openid) and [Single sign-on with OpenID Connect](/docs/authentication/single-sign-on/get-single-sign-on-customer-token).

:::caution
To set up single sign-on for customers of your store, use the **Buyer Organization** realm. To set up single sign-on for store administrators and developers, use the **Merchant Organization** realm.
:::

## Buyer Organization: Adding redirect URLs

When the storefront begins the single sign-on flow for an end user or customer, it must tell Commerce which URI the user should be redirected to when the authentication completes. This is the `redirect_uri` parameter discussed in [Single sign-on with OpenID Connect](/docs/customer-management/customer-managment-api/customer-tokens). These URLs must be explicitly listed as *Redirect URIs* to prevent phishing and other security vulnerabilities.

1. On the **System > Store Settings > Authentication Management** tab, click **Buyer Organization** realm.

1. In the **Edit Configuration** area for the realm, enter redirect URIs.

    You can view the list of redirect URIs as tags or as a comma-separated list.

1. Click **Save** to save the configuration.

## Merchant Organization: URL prefix

To log into the correct store’s Commerce Manager as a developer or administrator when using single sign-on, you must set a *URL prefix* for your store’s Merchant Organization realm.

:::note
This prefix must be unique, and comprised of between two and 24 alphanumeric characters.
:::

1. On the **System > Store Settings > Authentication Management** tab, click **Merchant Organization** realm.

1. In the **Edit Configuration** area for the realm, enter your URL prefix.

    You enter the URL prefix every time you log in to Commerce Manager.

1. Click **Save** to save the configuration.

## Adding a new provider

1. Select a realm on the **System > Store Settings > Authentication Management** page.

1. In the **Edit Configuration** area for the realm, click **Add New Provider**.

1. Enter the following information:

    | Field    | Information     |
    | :------------- | :------------- |
    | **Name** | The name of the configuration. |
    | **Discovery Url** | The URL where the OpenID Connect authentication configuration is found. This is often at the URL of the provider. For example: `https://<URL>/.well-known/openid-configuration` |
    | **Client Id** | The client identifier that Composable Commerce uses to identify itself with the authentication provider. |
    | **Client Secret** | A secret code known only to Composable Commerce and the authentication provider. |

1. In the Redirect URL for Provider dialog box that opens, click **Copy** to copy the **Redirect URL for Provider** URL.

    This redirect URL must be configured in your single sign-on authentication provider setup.

    You can also copy the **Redirect URL for Provider** field after you have saved the configuration for a new provider. Use the **Copy** button to copy the URL.

After you have properly configured one or more authentication providers, when customers open the **Login** dialog box, a **Login with [provider]** button is available for single sign-on authentication workflow.
