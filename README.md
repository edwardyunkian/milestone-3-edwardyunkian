# RevoShop

RevoShop is a simple e-commerce website built using Next.js, React, and Tailwind CSS. Users can browse a product catalog, view product details, add items to a shopping cart, update item quantities, and read supporting shop information through About and FAQ pages.

## Deployed Website
https://milestone-3-edwardyunkian-epp6.vercel.app/

## Project Overview

The application is designed as a small front-end e-commerce store for everyday essentials. Product data is stored locally in the project, making the app easy to run without a backend service or external database.

This project focuses on:

- Building a multi-page storefront with the Next.js App Router
- Rendering reusable product and navigation components
- Managing cart state with React Context
- Persisting cart data in the browser using `localStorage`
- Styling a responsive user interface with Tailwind CSS

## Features Implemented

- Product catalog page displaying 30 products
- Product detail pages using dynamic routes
- Add to cart functionality
- Cart quantity increase and decrease controls
- Cart total calculation
- Persistent cart state using browser `localStorage`
- Navigation bar with live cart quantity
- About page describing the fictional shop
- FAQ page with common customer questions
- Responsive layout for desktop and mobile screens
- Indonesian Rupiah price formatting

## Technologies Used

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [React DOM](https://react.dev/reference/react-dom)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [ESLint](https://eslint.org/)
- JavaScript

## Project Structure

```text
src
|-- app
|   |-- about
|   |   `-- page.js
|   |-- cart
|   |   `-- page.js
|   |-- faq
|   |   `-- page.js
|   |-- products
|   |   `-- [id]
|   |       `-- page.js
|   |-- globals.css
|   |-- layout.js
|   `-- page.js
|-- components
|   |-- AddToCartButton.js
|   |-- Navbar.js
|   `-- ProductCard.js
|-- context
|   `-- CartContext.js
`-- data
    `-- products.js
```

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

Install the project dependencies:

```bash
npm install
```

### Run the Development Server

Start the local development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

### Build for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

### Run Linting

Check the project with ESLint:

```bash
npm run lint
```

## Main Routes

| Route | Description |
| --- | --- |
| `/` | Displays the product catalog |
| `/products/[id]` | Displays details for a selected product |
| `/cart` | Displays cart items, quantities, and total price |
| `/about` | Displays information about RevoShop |
| `/faq` | Displays frequently asked questions |

## Notes

- Product data is stored locally in `src/data/products.js`.
- Cart data is saved in browser `localStorage`, so it may differ between browsers or devices.
- The project does not include real checkout, payment, shipping, or backend database functionality.
