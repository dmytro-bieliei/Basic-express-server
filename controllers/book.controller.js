const Book = require("../models/Book");

module.exports.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.send(books);
};

module.exports.getBook = async (req, res) => {
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
}
