const Book = require("../models/Book");

module.exports.getBook = async (req, res) => {
  const books = await Book.findAll();
  res.send(books);
};

module.exports.createBook = async (req, res) => {
  const newBook = await Book.create(req.body);
  res.send(newBook);
};

module.exports.deleteBook = async (req, res) =>{
  
  res.send(book)
}
