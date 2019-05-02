// importing express, mongoose for the app
// importing the routes files for server to access
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
// instantiating one express instance in const var 'app'
const app = express();
// defining port for running on deployed or local version
const PORT = process.env.PORT || 3001;


// middleware: express will parse through detailed JSON objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if the node environment is in production, it will use the 'build' folder that was created during react deployment (runs as static files)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// express will use the routes from the files in the routes folder (required above)
app.use(routes);

// set up connection to Mongoose which either connects to production or localhost environment
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://apUser:password1234@ds153304.mlab.com:53304/heroku_s34b9j2r",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// set up server listener and console in CLI where it's being locally hosted
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
