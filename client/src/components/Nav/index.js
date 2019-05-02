// import react package and deconstruct Component element, import link element from router, and import style file
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// declare class component to update state
class Nav extends Component {
  // state begins with open set to false and width set to window's width
  state = {
    open: false,
    width: window.innerWidth
  };

  // listener for window size changer
  updateWidth = () => {
    // newState is whatever width the browser is at
    const newState = { width: window.innerWidth };

    // set newState's open key to false if conditions met
    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    // setting newState of updated browser's width
    this.setState(newState);
  };

  // method for toggling hamburger nav on smaller screens
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  // on loading document, listen for browser's width
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  // when exiting document
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        {/* sets up link for homepage */}
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button
          // this is for onClick of hamburger
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* determining if hamburger toggle will open or not */}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                // onClick listener
                onClick={this.toggleNav}
                // if path is homepage, set it as active link, otherwise it's regular (inactive) link
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
              // onClick listener
                onClick={this.toggleNav}
                // if path is /saved, set it as active link, otherwise it's regular (inactive) link
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// export Nav class component
export default Nav;
