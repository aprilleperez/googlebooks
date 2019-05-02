// import react package and style file
import React from "react";
import "./style.css";

// takes in children passed down from Home/Saved JS pages
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

// exports Jumbotron component
export default Jumbotron;
