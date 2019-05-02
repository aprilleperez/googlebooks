// this file controls the functions of what the user wants to do with the books (CRUD ops)

// require the models which model the db 
const db = require("../models");

// exports all the following db queries for the ROUTES TO USE (routes/api/books)
module.exports = {
  // finds all items in db, takes in request and response
  findAll: function (req, res) {
    // will find all items in Book collection that match the request's query
    db.Book.find(req.query)
      // creates a parameter 'dbBook' which is what is passed to the response as a JSON object
      .then(dbBook => res.json(dbBook))
      // if there's an error, send a 422 response with the caught error
      .catch(err => res.status(422).json(err));
  },
  // finds items with specific id, takes in request and response
  findById: function (req, res) {
    // will find items in Book collection that match the request's id, stated in query parameter
    db.Book.findById(req.params.id)
      // refer to findAll notes ^^
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // creates new Book item to be stored in Book collection, takes in request and response
  create: function (req, res) {
    // creates book object from the request's body
    db.Book.create(req.body)
      // refer to findAll notes ^^
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // updates user's selected book from the database, takes in request and response
  update: function (req, res) {
    // finds the book with that specific id through the requested params, and creates its updated info through the request's body (only this requested book can be updated)
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      // refer to findAll notes ^^
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  // removes user's selected book from database, takes in request and response
  remove: function (req, res) {
    // finds the book with that specific id through the params
    db.Book.findById(req.params.id)
      // dbBook is the parameter created from the found book, and it then becomes removed through the mongoose function
      .then(dbBook => dbBook.remove())
      // refer to findAll notes ^^
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
