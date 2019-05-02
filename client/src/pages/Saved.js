// import react and deconstruct its Component element, import components Jumobtron - Footer, import the API functionality, import and deconstruct the grid and list components
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// declare a class component which extends react component to control state
class Saved extends Component {
  // state will start with an empty array called books
  state = {
    books: []
  };

  // on load, call class function of getting saved books (listener below)
  componentDidMount() {
    this.getSavedBooks();
  }

  // hit the API call and then load the page with all data of books that have already been saved (if none, then there won't be anything). Update the books array in the state to fill with saved book data
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // if user wants to delete a book from saved books page, this function listen for the trigger to delete a book (from dom button) which will take in the ID of that selected book to be deleted, and will delete the book from the API, then update the page without the book that was just deleted
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    // display for the page: 
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {/* if there is a length to the books array in state: */}
              {this.state.books.length ? (
                <List>
                  {/* for each book in the state's books array,  */}
                  {this.state.books.map(book => (
                    // generate the book constructor which assigns all the below (key-image) with the appropriate info
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      // attach a button to each book data which sets up listeners for class's methods above
                      Button={() => (
                        <button
                          // onClick listener, use the handleBookDelete method above
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
                // else if no books in books array (if it's empty)
              ) : (
                  // render No Saved Books display
                  <h2 className="text-center">No Saved Books</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export the Saved class component for APP.JS TO USE
export default Saved;
