const yup = require("yup");

const BOOK_CREATION_SCHEMA = yup.object({
  id: yup.string(),
  title: yup.string(),
  authors: yup.string(),
  publicationDate: yup.string(),
});

const BOOK_UPDATE_SCHEMA = yup.object({
  id: yup.string(),
  title: yup.string(),
  authors: yup.string(),
  publicationDate: yup.string(),
});

module.exports.BOOK_CREATION_SCHEMA = BOOK_CREATION_SCHEMA;
module.exports.BOOK_UPDATE_SCHEMA = BOOK_UPDATE_SCHEMA;
