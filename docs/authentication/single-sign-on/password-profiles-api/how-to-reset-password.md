---
title: How to Reset Passwords using Password Profiles
nav_label: How to Reset Passwords using Password Profiles
sidebar_position: 80
---

The One-Time Password Token request APIs can be used to perform a Password Reset scenario in your experience.

## Prerequisites

If you want to follow along, you need the following:

- A Commerce account and the Client ID and Client Secret of your store, available from your [Commerce Manager](/docs/getting-started/cm-overview).
- A front-end application or a custom application accessible to you in a web browser which accesses the Commerce API with the [implicit token](/docs/authentication/Tokens/implicit-token).
- An [access token](/docs/api-overview/your-first-api-request#get-an-access-token).

## Step-by-step Walkthrough

The following steps are used to set up the feature to be used.

1. [Get the Account Authentication Settings](#get-the-account-authentication-settings)
1. [Create/Update the Password Profile](#createupdate-the-password-profile)
1. [Create a User for testing](#create-a-user-for-testing)
1. [Create a Webhook](#create-a-webhook)

The following steps are used to perform a Password Reset

1. [Create One-Time Password Token Request](#create-one-time-password-token-request)
1. [Webhook used to send code to user](#webhook-used-to-send-code-to-user)
1. [Exchange code for Account Management Authentication Token](#exchange-code-for-account-management-authentication-token)

### Get the Account Authentication Settings

Use the [Account Authentication Settings API](/docs/authentication/single-sign-on/account-authentication-settings/get-account-authentication-settings) to obtain the `authentication_realm`. Additionally, [update](/docs/authentication/single-sign-on/account-authentication-settings/update-account-authentication-settings) the setting for `account_member_self_management` to `update_only` if not set already. This will allow the user to reset their password using the [Account Management Authentication Token](/docs/accounts/using-account-management-api/account-member-authentication).

### Create/Update the Password Profile

Use the [Password Profiles API](/docs/authentication/single-sign-on/password-profiles-api/overview) to either [create](/docs/authentication/single-sign-on/password-profiles-api/create-a-password-profile) a new Password Profile, or [update](/docs/authentication/single-sign-on/password-profiles-api/update-a-password-profile) the existing Password Profile used for authentication. To enable the feature, set `enable_one_time_password_token` to `true`. Make note of the id for the next step.

### Create a User for testing

First create a [User Authentication Info](/docs/authentication/single-sign-on/user-authentication-info-api/create-a-user-authentication-info) to represent a user, then associate them to the Password Profile from the previous step using the [User Authentication Password Profile Info](/docs/authentication/single-sign-on/user-authentication-password-profiles-api/create-a-user-authentication-password-profile) API making note of the username.

### Create a Webhook

Using the [Integrations API](/docs/integrations/integrations-api/create-an-integration), create an integration which observes the `one-time-password-token-request.created` event. This Integration should be used to send information from the event to the user. Most commonly this will be used to send an email template to the user, which would direct them to your page which handles password reset. For example, set `integration_type` to `webhook` and `configuration.url` to a url which can handle sending the email to the user like `https://yourwebsite.com/one-time-password-token-notification` which can handle the event and send an email.

Alternatively, you can set up [Sendgrid](/docs/composer/integration-hub/marketing-communication/sendgrid) or [Postmark](/docs/composer/integration-hub/marketing-communication/postmark) within Integrations Hub with an event mapping for `one-time-password-token-request.created` and configure your email template within the third-party system.

Example payload for `one-time-password-token-request.created`:

```json
{
  "id": "31ca9869-a6eb-4f06-989c-17900fa12f2d",
  "store_id": "877baaf1-50b7-4cae-afa5-2431fa7b5ee4",
  "triggered_by": "one-time-password-token-request.created",
  "integration": {
    "id": "145d7084-7b00-4f10-9d55-0ecd49c1a2bb",
    "integration_type": "webhook",
    "name": "One Time Password notification",
    "description": "Send one time password notification"
  },
  "payload": {
    "authentication_realm_id": "063623f1-9182-4c8f-bb17-91d326e06e69",
    "created_at": "2023-09-05T14:53:01.584+00:00",
    "one_time_password_token": "lprvj4",
    "password_profile_id": "9a44bb7e-e377-4382-b36e-c8030aad1c2d",
    "purpose": "reset_password",
    "updated_at": "2023-09-05T14:53:01.584+00:00",
    "user_authentication_info": {
      "email": "john.doe@banks.com",
      "id": "459a2d49-ff3f-4589-b9fb-7e86ac7273f4",
      "name": "John Doe"
    },
    "user_authentication_password_profile_info": {
      "id": "d63be373-580d-4e16-818b-15513341e9b6",
      "password_profile_id": "9a44bb7e-e377-4382-b36e-c8030aad1c2d",
      "username": "john.doe@banks.com"
    }
  },
  "configuration": {
    "url": "https://webhook.site/24b00ff8-90ae-439f-a400-30c53d5ba964",
    "secret_key": ""
  }
}
```

Now that we have everything set up, the next steps will be to perform a Password Reset scenario.

### Create One Time Password Token Request

Using the username and password profile ID above, initiate a Password Reset by creating a [One Time Password Token Request](/docs/authentication/single-sign-on/password-profiles-api/create-one-time-password-token-request) with the `purpose` as `reset_password`. This API will send an event with the code and additional information to the Webhook we set up earlier. This is the API call that should be used upon initiating a Password Reset from your application.

### Webhook used to send code to user

From the above we can use the information provided in the event to direct the user to a Password Reset page. It is recommended to embed the following into your redirect or email template:

- `password_profile_id`
- `username`
- `one_time_password_token`

Additionally, you can also provide the following which will make resetting the user's password slightly easier in the next step:

- `user_authentication_password_profile_info.id`
- `authentication_realm_id`

An example redirect would be a page in your application such as `https://yourwebsite.com/change_password?username=john.doe@banks.com&token=lprvj4`


### Exchange code for Account Management Authentication Token

In your application, use the One Time Password Token from the previous step to generate an Account Management Authentication Token using [Account Member Authentication](/docs/accounts/account-management-authentication/account-management-authentication-api/one-time-password-token). The Account Management Authentication Token can be used to update the password using [Update User Authentication Password Profile Info](/docs/authentication/single-sign-on/user-authentication-password-profiles-api/update-a-user-authentication-password-profile).
