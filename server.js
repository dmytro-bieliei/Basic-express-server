const express = require('express');

const {
  validateBookMW,
  validateBookUpdateMW,
} = require('./middlewares/bookMW');

const BookController = require('./controllers/book.controller');

const app = express();

const PORT = 5000;

const bodyParser = express.json();

app.get('/books', BookController.getBooks);
app.get('books/:bookId', bodyParser, BookController.getBook);
app.post('/books', bodyParser, validateBookMW, BookController.createBook);
app.delete('/books/:bookId', BookController.deleteBook);
app.put('books/:bookId', bodyParser, validateBookUpdateMW, BookController.updateBook);


app.listen(PORT);