// import react package
import React from "react";

// declare function component that takes in the query, and the event listeners from parent 
function Form({ q, handleInputChange, handleFormSubmit }) {
  // show on DOM
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          // insert q parameter as value's value here
          value={q}
          placeholder="Ready Player One"
          name="q"
          // onChange fires off when input is changed from user
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          // onClick fires off when user clicks on the button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

// export the Form function component
export default Form;
