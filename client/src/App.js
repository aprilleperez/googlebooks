// import react package, deconstruct its elements for react-router-dom to be able to dynamically update with routes and paths, and all high-level components for structuring
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

// create function to structure the high-level components
function App() {
  // return (render to page) the following
  return (
    // this is for index.html to signal a routed app
    <Router>
      {/* if more than one component, must all be wrapped in a div */}
      <div>
        <Nav />
        {/* indicates switch signal */}
        <Switch>
          {/* if path is certain URL, render the appropriate component page */}
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

// export all above as single App var for INDEX.JS TO USE
export default App;
