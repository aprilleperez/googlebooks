// import react package, import and deconstruct the list/grid components, and import style file
import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

// create function component that takes in title-button constructors from parent
function Book({ title, subtitle, authors, link, description, image, Button }) {
  // show on DOM
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          {/* make title from parent */}
          <h3 className="font-italic">{title}</h3>
          {/* make subtitle from parent */}
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            {/* assign link from parent */}
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            {/* create button with button specs from parent */}
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          {/* make autho from parent */}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          {/* assign image src and alt title from parent */}
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          {/* make description from parent */}
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

// export Book function component
export default Book;
