# REST-API-Using-Nodejs-and-Express
# Book Management REST API

## Objective

This project is a simple REST API built using **Node.js** and **Express.js**. It performs basic CRUD (Create, Read, Update, Delete) operations on a collection of books stored in an in-memory array. The API was tested using **Postman**.

## Project Steps

### 1. Initialize the Project

The project was initialized using `npm init`, which created the `package.json` file to manage project information and dependencies.

### 2. Install Express

The Express framework was installed using:

```VS Code
npm install express
```

Express was used to simplify server creation and routing.

### 3. Set Up the Express Server

A basic Express server was created and configured to listen on **port 3000**, allowing it to receive and respond to HTTP requests.

### 4. Create a Book Array

An in-memory array was created to store book objects. Each book contains the following properties:

- `id`
- `title`
- `author`

### 5. GET `/books`

A GET endpoint was implemented to retrieve and return all books stored in the array.

### 6. POST `/books`

A POST endpoint was implemented to add a new book to the array using the data received in the request body.

### 7. PUT `/books/:id`

A PUT endpoint was implemented to update the details of an existing book by using its unique ID.

### 8. DELETE `/books/:id`

A DELETE endpoint was implemented to remove a book from the array based on its ID.

### 9. Test the API

All API endpoints were tested using **Postman** to ensure that the CRUD operations worked correctly.

## Technologies Used

- Node.js
- Express.js
- npm
- Postman

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Retrieve all books |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Update a book by ID |
| DELETE | `/books/:id` | Delete a book by ID |

## Conclusion

This project demonstrates the fundamentals of building a REST API with Node.js and Express.js. It provides practical experience with HTTP methods, routing, handling JSON data, implementing CRUD operations, and testing APIs using Postman.