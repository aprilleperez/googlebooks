// import react package and style file
import React from "react";
import "./style.css";

// This component exports both the List and ListItem components (2 exports)

// takes in children passed down from Home/Saved JS pages
export const List = ({ children }) => (
  // creates list group for each children made
  <ul className="list-group">
    {children}
  </ul>
);

// takes in children passed down from Home/Saved JS pages
export function ListItem({ children }) {
  // creates list item for each children made
  return <li className="list-group-item">{children}</li>;
}
