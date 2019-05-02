// import axios package
import axios from "axios";

// export all below
export default {
  // getBooks function takes in a single parameter (query)
  getBooks: function(q) {
    // return (render) the result when hitting the "/api/google" path with the 
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // render to DOM the data when hitting the path
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // delete function takes in the id as a param: this page will update when the delete button clicked, deleting the book with the specific ID
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // saveBook takes in one param (bookData): render the page with all books that have been saved, with the just-added one (from the post method)
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
