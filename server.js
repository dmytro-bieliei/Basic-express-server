const express = require('express');

const BookController = require('./controllers/book.controller')

const app = express();

const PORT = 5000;

const bodyParser = express.json();

app.get('/books', BookController.getBooks);
app.get('books/:bookId', bodyParser, BookController.getBook)
app.post('/books', bodyParser, BookController.createBook);
app.delete('/books/:bookId', BookController.deleteBook);


app.listen(PORT);