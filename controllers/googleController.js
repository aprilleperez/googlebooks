// this file controls how the google API will work with the server

// require the axios package and db model file
const axios = require("axios");
const db = require("../models");

// exports all following API calls for the ROUTES TO USE (routes/api/google)
module.exports = {
  // finds all books requested in the routes, takes in request from route and outputs response
  findAll: function(req, res) {
    // the request (from the url) will become added to the query needed to hit the API with that requested book
    const { query: params } = req;
    axios
      // read the results from the google query (completed from params var)
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      // axios is promise-based, so once the .get happens, 
      .then(results =>
        // the results will be filtered through the filter function
        results.data.items.filter(
          result =>
            // filter through the title, infoLink, authors, description, imageLinks, and thumbnails
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // once the first .then happens, store all above results as the apiBooks object
      .then(apiBooks =>
        // use the find all method for the db and create the dbBooks object as a result of the find all
        db.Book.find().then(dbBooks =>
          // filter through the apiBooks object 
          apiBooks.filter(apiBook =>
            // make sure that the requested book is just the one
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      // send the books var as a JSON object 
      .then(books => res.json(books))
      // or send 422 page with error
      .catch(err => res.status(422).json(err));
  }
};
