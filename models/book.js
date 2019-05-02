// require mongoose and schema model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// bookSchema will be a var that creates new constructor instance of a book (formatted for db)
const bookSchema = new Schema({
  // all below denote type of data, and require all fields to have inputs (googleId will always be unique for every instance)
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// Book var becomes all of above code into a clean variable
const Book = mongoose.model("Book", bookSchema);

// exports Book var for this folder's INDEX.JS USE
module.exports = Book;
