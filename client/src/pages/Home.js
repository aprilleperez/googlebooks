// import react and deconstruct its Component element, import components Jumobtron - Footer, import the API functionality, import and deconstruct the grid and list components
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// declare a class function which extends react component to control state
class Home extends Component {
  // state will start with an empty array called books, a q (query) set to an empty string, and the message with starting instructions
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  // since this method is attached to the search form, when the user's input is changing in the search field (event listener)
  handleInputChange = event => {
    // set the vars name and value to the event's (input) target (value)
    const { name, value } = event.target;
    // change state to dynamically alter the specific value of the selected form element name
    this.setState({
      [name]: value
    });
  };

  // when form submit button clicked, hit the API with the state's updated q, then change the books array to be populated with the query's data
  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      // if an error with search query, update state to be an empty books array, and change message to tell the user to try again
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  // when submit button is pressed, prevent page from refreshing and then call on the getBooks method above
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  // event listener when save button is pressed, takes in the ID of the book card it is attached to
  handleBookSave = id => {
    // book var becomes the book that the user is trying to save
    const book = this.state.books.find(book => book.id === id);

    // hits the API's function saveBook and saves googleId-image
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    })
      // then calls the getBooks method here
      .then(() => this.getBooks());
  };

  // display on DOM
  render() {
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
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                // set up the listener on the forms to be updated when user interacts with it (both the search bar and the submit button, and q becomes affected in state)
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {/* if there is a length to the books array in state: */}
              {this.state.books.length ? (
                <List>
                  {/* for each book in the state's books array,  */}
                  {this.state.books.map(book => (
                    // generate the book constructor which assigns all the below (key-image) with the appropriate info
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      // attach a button to each book data which sets up listeners for class's methods above
                      Button={() => (
                        <button
                          // onClick listener, use the handleBookSave method above
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
                // else if no books in books array (if it's empty)
              ) : (
                  // render the base state message
                  <h2 className="text-center">{this.state.message}</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// export Home class component for APP.JS TO USE
export default Home;
