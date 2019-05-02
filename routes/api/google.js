// require the express router to communicate with frontend routes, and controller file for google
const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// when "/" hit, use the findall function (refer to controller)
router
  .route("/")
  .get(googleController.findAll);

// export everything from this file attached to router for this folder's INDEX.JS TO USE
module.exports = router;
