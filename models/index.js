// This file is necessary when the controller looks into the models folder, it will see this file first (instead of needing to import the models/books.js)

// exports the required book.js file in this folder structure for the CONTROLLER TO USE
module.exports = {
  Book: require("./book")
};
