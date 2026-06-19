# RevoShop

## Live Demo

**Deployed Website:**
https://milestone-3-edwardyunkian-epp6.vercel.app/

**GitHub Repository:**
https://github.com/Revou-FSSE-Feb26/milestone-3-edwardyunkian

---

# Project Overview

RevoShop is a modern e-commerce web application built with Next.js. The application allows users to browse products, view product details, manage a shopping cart, authenticate through a login system, complete a checkout process, and manage products through an admin dashboard.

The project uses the Platzi Fake Store API for product, user, and authentication data while implementing custom API routes for CRUD operations and route protection using Next.js middleware.

---

# Features Implemented

## Product Catalog

* Display product list on homepage
* Dynamic product detail pages
* Fetch product data from Platzi API
* Responsive product grid layout

## Authentication

* User login using Platzi API authentication endpoint
* Authentication token stored in cookies
* Login and logout functionality
* Redirect users after successful login

## Route Protection

* Protected Checkout page
* Protected Admin Dashboard
* Middleware-based authentication checks
* Automatic redirect to login page for unauthorized users

## Shopping Cart

* Add products to cart
* Remove products from cart
* Update item quantities
* Cart summary and total calculation
* Persistent cart state using localStorage

## Checkout

* Checkout form
* Order summary
* Order confirmation page
* Cart clearing after successful checkout

## Admin Dashboard

* View products
* Create new products
* Edit products
* Delete products
* View registered users

## API Routes

Implemented custom Next.js API Routes:

* GET /api/products
* POST /api/products
* PUT /api/products/[id]
* DELETE /api/products/[id]

## State Management

* React Context API for global cart state
* LocalStorage persistence
* Efficient state updates for cart operations

---

# Technologies Used

* Next.js 16
* React 19
* Tailwind CSS 4
* JavaScript (ES6+)
* React Context API
* Next.js Middleware
* Next.js API Routes
* Platzi Fake Store API

---

# Screenshots

## Homepage

![Homepage](./public/screenshots/Homepage.png)

---

## Product Detail Page

![Product Details](./public/screenshots/Product-Details.png)

---

## Shopping Cart

![Shopping Cart](./public/screenshots/Shopping-Cart.png)

---

## Login Page

![Login Page](./public/screenshots/Login-Page.png)

---

## Checkout Page

![Checkout Page](./public/screenshots/Checkout-Page.png)

---

## Admin Dashboard

![Admin Dashboard](./public/screenshots/Admin-Dashboard.png)

---


## Registered Users Table

![Registered Users](./public/screenshots/Registered-Users.png)

---


# Installation

Clone the repository:

```bash
git clone https://github.com/Revou-FSSE-Feb26/milestone-3-edwardyunkian
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# Build for Production

```bash
npm run build
```

```bash
npm run start
```

---

# Project Structure

```text
src
├── app
│   ├── admin
│   ├── api
│   ├── cart
│   ├── checkout
│   ├── login
│   ├── products
│   └── page.js
├── components
├── context
└── middleware.js
```

---

# Notes

* Product, user, and authentication data are fetched from the Platzi Fake Store API.
* Cart data is persisted using browser localStorage.
* API routes are implemented using Next.js Route Handlers.
* Middleware is used to protect authenticated routes.
* The Platzi API does not permanently persist updates to seed data; therefore, local UI state updates are used to demonstrate CRUD functionality.
