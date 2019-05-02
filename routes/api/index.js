// require path package (for making clean paths), router package (for routing with frontend), and both book/google route files
const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// when HTML path is /books, use the bookRoutes entry point for functions
router.use("/books", bookRoutes);

// when HTML path is /google, use the googleRoutes entry point for functions
router.use("/google", googleRoutes);

// export everything from this file attached to router for SERVER TO USE
module.exports = router;
