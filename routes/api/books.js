// require the express router to communicate with frontend routes, and controller file for book
const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// when "/" route hit, either use findall function, or post to db using the create function (refer to controller)
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// when "/:id" route hit, either use findById function, or the update function, or the delete function
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

// export everything from this file attached to router for this folder's INDEX.JS TO USE
module.exports = router;
