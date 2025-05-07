# EStore

A full featured Ecommerce website built with Next.js, TypeScript, PostgreSQL and Prisma.

<img src="/public/images/screen.png" alt="Next.js Ecommerce" />

This project is from my **Next.js Ecommerce course**

- Traversy Media: [https://www.traversymedia.com/nextjs-ecommerce](https://www.traversymedia.com/nextjs-ecommerce)
- Udemy: [https://www.udemy.com/course/nextjs-ecommerce-course](https://www.udemy.com/course/nextjs-ecommerce-course)

## Table of Contents

<!--toc:start-->

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Usage](#usage)
  - [Install Dependencies](#install-dependencies)
  - [Environment Variables](#environment-variables)
    - [PostgreSQL Database URL](#postgresql-database-url)
    - [Next Auth Secret](#next-auth-secret)
    - [PayPal Client ID and Secret](#paypal-client-id-and-secret)
    - [Stripe Publishable and Secret Key](#stripe-publishable-and-secret-key)
    - [Uploadthing Settings](#uploadthing-settings)
    - [Resend API Key](#resend-api-key)
  - [Run](#run)
- [Prisma Studio](#prisma-studio)
- [Seed Database](#seed-database)
- [Demo](#demo)
- [Bug Fixes And Course FAQ](#bug-fixes-and-course-faq)
  - [Fix: Edge Function Middleware Limitations on Vercel](#fix-edge-function-middleware-limitations-on-vercel)
  - [Bug: A newly logged in user can inherit the previous users cart](#bug-a-newly-logged-in-user-can-inherit-the-previous-users-cart)
  - [Bug: Any user can see another users order](#bug-any-user-can-see-another-users-order)
  - [Bug: Cart add and remove buttons share loading animation](#bug-cart-add-and-remove-buttons-share-loading-animation)
  - [FAQ: Why are we using a JS click event in not-found](#faq-why-are-we-using-a-js-click-event-in-not-found)
- [License](#license)
<!--toc:end-->

## Features

- Next Auth authentication
- Admin area with stats & chart using Recharts
- Order, product and user management
- User area with profile and orders
- Stripe API integration
- PayPal integration
- Cash on delivery option
- Interactive checkout process
- Featured products with banners
- Multiple images using Uploadthing
- Ratings & reviews system
- Search form (customer & admin)
- Sorting, filtering & pagination
- Dark/Light mode
- Much more

## Usage

### Install Dependencies

```bash
npm install
```

Note: Some dependencies may have not yet been upadated to support React 19. If you get any errors about depencency compatability, run the following:

```bash
npm install --legacy-peer-deps
```

### Environment Variables

Rename the `.example-env` file to `.env` and add the following

#### PostgreSQL Database URL

Sign up for a free PostgreSQL database through Vercel. Log into Vercel and click on "Storage" and create a new Postgres database. Then add the URL.

**Example:**

```
DATABASE_URL="postgresql://username:password@host:port/dbname"
```

#### Next Auth Secret

Generate a secret with the following command and add it to your `.env`:

```bash
openssl rand -base64 32
```

**Example:**

```
NEXTAUTH_SECRET="xmVpackzg9sdkEPzJsdGse3dskUY+4ni2quxvoK6Go="
```

#### PayPal Client ID and Secret

Create a PayPal developer account and create a new app to get the client ID and secret.

**Example:**

```
PAYPAL_CLIENT_ID="AeFIdonfA_dW_ncys8G4LiECWBI9442IT_kRV15crlmMApC6zpb5Nsd7zlxj7UWJ5FRZtx"
PAYPAL_APP_SECRET="REdG53DEeX_ShoPawzM4vQHCYy0a554G3xXmzSxFCDcSofBBTq9VRqjs6xsNVBcbjqz--HiiGoiV"
```

#### Stripe Publishable and Secret Key

Create a Stripe account and get the publishable and secret key.

**Example:**

```
STRIPE_SECRET_KEY="sk_test_51QIr0IG87GyTererxmXxEeqV6wuzbmC0TpkRzabxqy3P4BpzpzDqnQaC1lZhmYg6IfNarnvpnbjjw5dsBq4afd0FXkeDriR"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_51QIr0Ids7GyT6H7X6R5GoEA68lYDcbcC94VU0U02SMkrrrYZT2CgSMZ1h22udb5Rg1AuonXyjmAQZESLLj100W3VGVwze"
```

#### Uploadthing Settings

Sign up for an account at https://uploadthing.com/ and get the token, secret and app ID.

**Example:**

```
UPLOADTHING_TOKEN='tyJhcGlLZXkiOiJza19saXZlXzQ4YTE2ZjhiMDE5YmFiOgrgOWQ4MmYxMGQxZGU2NTM3YzlkZGI3YjNiZDk3MmRhNGZmNGMwMmJlOWI2Y2Q0N2UiLCJhcHBJZCI6InRyejZ2NHczNzUiLCJyZWdpb25zIjpbInNlYTEiXX0='
UPLOADTHIUG_SECRET='gg'
UPLOADTHING_APPID='trz6vd475'
```

#### Resend API Key

Sign up for an account at https://resend.io/ and get the API key.

**Example:**

```
RESEND_API_KEY="re_ZnhUfrjR_QD2cDqdee3iYCrkfvPYFCYiXm"
```

### Run

```bash

# Run in development mode
npm run dev

# Build for production
npm run build

# Run in production mode
npm start

# Export static site
npm run export
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma Studio

To open Prisma Studio, run the following command:

```bash
npx prisma studio
```

## Seed Database

To seed the database with sample data, run the following command:

```bash
npx tsx ./db/seed
```

## Demo

[ https://prostore-one.vercel.app/ ](https://prostore-one.vercel.app/)
