class Book {
  static bookDB = [
    {
      id: 1,
      title: 'Head First JavaScript programming',
      authors:'Elisabeth Robson, Eric Freeman',
      publicationDate: 'may 6, 2014',
    },
    {
      id: 2,
      title: 'Begining ReactJS foundations',
      authors:'Chris Minnick',
      publicationDate: 'february 11, 2022',
    },
  ];

  static async findAll() {
    return this.bookDB;
  }

  static async findOne(bookId) {
    const foundBook = this.bookDB.find((book) => book.id === Number(bookId));
    return foundBook;
  }

  static async create(bookData) {
    const newBook = {
      ...bookData,
      id: Date.now(),
    };

    this.bookDB.push(newBook);

    return newBook;
  }

  static async delete(bookId) {
    const foundBook = await Book.findOne(userId);

    if (foundBook) {
      this.bookDB = this.bookDB.filter((book) => book.id !== Number(bookId));
      return foundBook;
    }

      throw new Error('Book not found');
  }

  static async update (bookId, newData) {
    const foundBook = await Book.findOne(bookId);

    if (foundBook) {
      let updateBook;
      this.bookDb =this.bookDB.map((book) =>{
        const isSameBook = book.id === Number(bookId);

        if(!isSameBook) {
          return book;
        } else {
          updateBook = {
            ...book,
            ...newData,
          };
          return updateBook;
        }
      });
      return updateBook;
    }
    throw new Error('Book not found');
  }
}

module.exports = Book;