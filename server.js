const express = require('express');

const BookController = require('./controllers/book.controller')

const app = express();

const PORT = 5000;

const bodyParser = express.json();

app.get('/books', BookController.getBook);

app.listen(PORT);