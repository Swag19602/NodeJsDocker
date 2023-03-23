const express = require("express");
const postController = require("../controllers/postControllers");
const router = express.Router();

router
  .route("/")
  .get(postController.getAllPost)
  .post(postController.createPost);
router
  .route("/:id")
  .get(postController.getOnePost)
  .delete(postController.deletePost)
  .patch(postController.updatePost);

module.exports = router;
