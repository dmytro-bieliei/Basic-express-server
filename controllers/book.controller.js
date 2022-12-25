const Book = require("../models/Book");

module.exports.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.send(books);
};

module.exports.getBook = async (req, res) => {
  const {
    params: { bookId },
  } = req;

  const foundUser = await Book.findOne(userId);
  res.send(foundUser);
};

module.exports.createBook = async (req, res) => {
  const newBook = await Book.create(req.body);
  res.send(newBook);
};

module.exports.deleteBook = async (req, res) => {
  const deletedBook = await Book.delete(bookId);
  res.send(deletedBook);
};

module.exports.updateBook = async (req, res) => {
  const {
    params: { bookId },
    body,
  } = req;
  const updateBook = await Book.update(userId, body);
  res.send(updateBook);
};
