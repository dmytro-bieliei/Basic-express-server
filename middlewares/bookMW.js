const {BOOK_CREATION_SCHEMA, BOOK_UPDATE_SCHEMA } = require("../utils/validationSchemas");

module.exports.validateBookMW = async (req, res, next) => {
  try {
    await BOOK_CREATION_SCHEMA.validate(req, body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.validateBookUpdateMW = async (req,res, next) => {
  try {
    await BOOK_UPDATE_SCHEMA.validate(req, body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};