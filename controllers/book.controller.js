const Book = require("../models/Book");

module.exports.getBook = async (req, res) => {
  const books = await Book.findAll();
  res.send(books);
}; 
