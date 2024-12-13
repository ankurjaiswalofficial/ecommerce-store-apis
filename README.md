# E-commerce Store API

This project is a simple e-commerce store API built with Node.js, Express.js, and using ES modules. The API allows users to add items to their cart, checkout, and provides admin functionalities to generate discount codes and retrieve statistics.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add items to the cart.
- Checkout and place an order.
- Generate discount codes for every nth order.
- Admin functionalities to retrieve statistics.

## Technology Stack

- **Backend**: Node.js with Express.js
- **In-memory Store**: Simple JavaScript objects
- **Testing**: Jest
- **Module System**: ES Modules

## Setup

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/ecommerce-store-apis.git
    cd ecommerce-store-apis
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the server:

    ```bash
    npm start
    ```

2. The server will run on `http://localhost:3000`.

## Usage

### API Endpoints

#### Add Item to Cart

- **URL**: `/cart/add`
- **Method**: `POST`
- **Body**:

    ```json
    {
      "userId": "user1",
      "item": {
        "id": "item1",
        "price": 10
      }
    }
    ```

- **Response**:

    ```json
    {
      "message": "Item added to cart"
    }
    ```

#### Checkout

- **URL**: `/checkout/checkout`
- **Method**: `POST`
- **Body**:

    ```json
    {
      "userId": "user1",
      "discountCode": null
    }
    ```

- **Response**:

    ```json
    {
      "orderId": 1,
      "totalAmount": 10,
      "discountCode": null
    }
    ```

#### Get Admin Stats

- **URL**: `/admin/stats`
- **Method**: `GET`
- **Response**:

    ```json
    {
      "totalItems": 1,
      "totalAmount": 10,
      "discountCodes": ["DISCOUNT1"],
      "totalDiscountAmount": 1
    }
    ```

### Postman Collection

You can import the following Postman collection to test the API endpoints:

```json
{
  "info": {
    "name": "Ecommerce Store API",
    "_postman_id": "12345678-1234-1234-1234-123456789012",
    "description": "API collection for Ecommerce Store",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Add Item to Cart",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"userId\": \"user1\",\n    \"item\": {\n        \"id\": \"item1\",\n        \"price\": 10\n    }\n}"
        },
        "url": {
          "raw": "http://localhost:3000/cart/add",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "cart",
            "add"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Checkout",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"userId\": \"user1\",\n    \"discountCode\": null\n}"
        },
        "url": {
          "raw": "http://localhost:3000/checkout/checkout",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "checkout",
            "checkout"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Get Admin Stats",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/admin/stats",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "admin",
            "stats"
          ]
        }
      },
      "response": []
    }
  ]
}
```
Testing
-------

### Running Tests

To run the tests, use the following command:

`npm test`

### Test Files

*   **Cart Controller Tests**: `test/cartController.test.js`
*   **Checkout Controller Tests**: `test/checkoutController.test.js`
*   **Admin Controller Tests**: `test/adminController.test.js`
