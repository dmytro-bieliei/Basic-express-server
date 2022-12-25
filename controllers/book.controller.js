const Book = require("../models/Book");

module.exports.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.send(books);
};

module.exports.getBook = async (req, res) => {
  const {
    params: { bookId },
  } = req;

  const foundUser = await Book.findOne(bookId);
  res.send(foundUser);
};

module.exports.createBook = async (req, res) => {
  const newBook = await Book.create(req.body);
  res.send(newBook);
};

module.exports.deleteBook = async (req, res) => {
  const {
    params: { bookId },
  } = req;
  try {
    const deletedBook = await Book.delete(bookId);
    res.send(deletedBook);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports.updateBook = async (req, res) => {
  const {
    params: { bookId },
    body,
  } = req;

  try {
    const updateBook = await Book.update(bookId, body);
    res.send(updateBook);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
