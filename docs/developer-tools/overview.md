---
title: Developer Tools
nav_label: Developer Tools
sidebar_position: 20
slug: /
---

## Introduction to API

The Composable Commerce API follows a microservice architecture that enables you to plug commerce into any part of your application. The API is inspired by the [JSON API](http://jsonapi.org/) specification, follows predictable [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) URLs, and supports [cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing). The two-track [Authentication Layer](/docs/authentication/overview) enables destructive and non-destructive actions across projects.

## API Base URLs

Commerce supports multiple geographical regions. For each customer, Commerce accounts and stores are created in a specific region. When you interact with and use the Commerce API, ensure that you use the API end point for the region your store is in. To view the **API base URL** field, go to **System > Application Keys** in **Commerce Manager**.

In the documentation, we use the variable name `<your_elasticpath_api_base_url>` in the sample requests. When making API requests, customers substitute the hostname for the variable.

## Authentication

All requests must include an authentication token in the header. Generate the token by using your API keys.

- To find your API keys, go to **System > Application Keys** section in **Commerce Manager**.
- To use the API to generate a token from your API keys, see the [Authentication](/docs/authentication/overview) or [Your first API request](/docs/api-overview/your-first-api-request#lesson-1-authenticate) sections.
- To learn more about API keys, see the [Security](/docs/authentication/security#api-authentication-credentials) section.

## Postman

If you are looking to test or develop with the Composable Commerce API, we recommend using the [Elastic Path Postman collection](/docs/api-overview/test-with-postman-collection). The collection includes all endpoints.

## Software Development Kits

Elastic Path officially maintains the following Software Development Kits (SDK) for Composable Commerce. Other community-driven SDKs are available within the [Moltin GitHub](https://github.com/moltin) organization.

### JavaScript SDK

If you are beginning a new project, we recommend that you use the JavaScript SDK for Composable Commerce, which is under active maintenance. Within this guide, the supported endpoints include sample **JavaScript SDK** requests. The Composable Commerce Reference Store is implemented using this SDK.

Get the [JavaScript SDK](https://github.com/moltin/js-sdk).

### Composable Frontend

:::note
This package is not feature complete and is work in progress.
:::

The package contains the executable for running Elastic Path Commerce Cloud Schematics.

###### Installation

````bash 
yarn global add composable-cli or npm install -g composable-cli
````

###### Generating a storefront

Login to Elasticpath

````bash 
composable-cli login
````

Generate a D2C (Direct-to-consumer) storefront

````bash 
composable-cli generate d2c my-storefront
````

Select your Elastic Path store from the list of stores.

###### Getting help

````bash 
composable-cli --help
````

###### Integrations

Configuring Algolia integration

````bash 
composable-cli int algolia
````

###### Payments Setup

Configuring Ep Payments

````bash 
composable-cli p ep-payments
````

### Education resources

You can find a self-serve Composable Commerce API course and other learning opportunities at [Elastic Path Education](https://education.elasticpath.com). Sign in, select the Content Library, and search for `Composable Commerce API`.
