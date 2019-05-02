// import react package
import React from "react";

// declare function component that takes in icon, title, and children params
function Card({ icon, title, children }) {
  // show on DOM
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* change icon to what is passed down from parent + the title of that card, from the book array */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* body of card will come from the google API data */}
      <div className="card-body">{children}</div>
    </div>
  );
}

// export Card function component
export default Card;
