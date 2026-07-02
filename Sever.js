const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies (req.body)
app.use(express.json());

// In-memory storage
let books = [];
let nextId = 1; // simple incrementing counter, avoids duplicate-ID bugs after deletes

// 1. GET /books - return all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// 2. POST /books - add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }

  const newBook = { id: nextId++, title, author };
  books.push(newBook);

  res.status(201).json(newBook);
});

// 3. PUT /books/:id - update a book by ID
app.put('/books/:id', (req, res) => {
  const id = Number(req.params.id); // req.params values are always strings
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: `Book with id ${id} not found` });
  }

  const { title, author } = req.body;
  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;

  res.status(200).json(book);
});

// 4. DELETE /books/:id - remove a book
app.delete('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Book with id ${id} not found` });
  }

  const deleted = books.splice(index, 1);
  res.status(200).json({ message: 'Book deleted', book: deleted[0] });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
