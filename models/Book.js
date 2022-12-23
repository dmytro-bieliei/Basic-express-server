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

  static async create(bookData) {
    const newBook = {
      ...bookData,
      id: Date.now(),
    };

    this.bookDB.push(newBook);

    return newBook;
  }
}

module.exports = Book;