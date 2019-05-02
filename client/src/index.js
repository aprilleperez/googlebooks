// import react and react-dom package, import App renders, and register service worker
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// render the exported App structure and send it to the DOM through public/index.html
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
