module.exports.getBook = async (req, res) => {
const books = await Books.findAll();
res.send(books);
};