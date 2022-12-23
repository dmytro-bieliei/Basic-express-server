const express = require('express');

const app = express();

const PORT = 5000;

const bodyParser = express.json();

app.get('/books').get(BooksController.getBook);

app.listen(PORT);