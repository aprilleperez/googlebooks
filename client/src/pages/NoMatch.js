// import react, import and deconstruct the grid and list components, import jumbotron
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

// declare NoMatch function 
function NoMatch() {
  // render
  return (
    // all following html elements wrapped in container
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            {/* will return a 404 error page, styled to be on-brand with app */}
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// export NoMatch function for APP.JS TO USE
export default NoMatch;
