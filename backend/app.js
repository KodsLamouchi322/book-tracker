const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

let books = [
  { id: 1, title: 'Clean Code', author: 'Robert Martin', status: 'read' },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Hunt & Thomas', status: 'to-read' }
];
let nextId = 3;

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/metrics', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`# HELP books_total Total number of books\n# TYPE books_total gauge\nbooks_total ${books.length}\n`);
});
app.get('/api/books', (req, res) => res.json(books));
app.post('/api/books', (req, res) => {
  const { title, author, status } = req.body;
  if (!title || !author) return res.status(400).json({ error: 'title and author required' });
  const book = { id: nextId++, title, author, status: status || 'to-read' };
  books.push(book);
  res.status(201).json(book);
});
app.delete('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.json({ message: 'deleted' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
