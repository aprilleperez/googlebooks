// require path package (for creating clean URL paths), router (for routing with frontend), and everything in the API subfolder
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// when "/api" hit, use every file chain from the API subfolder
router.use("/api", apiRoutes);

// when deployed to heroku, make sure to use the build folder for correct rendering
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// export everything from routes main folder for SERVER TO USE (server will look straight to here first)
module.exports = router;
