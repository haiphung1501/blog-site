const PostController = require("../controllers/postController")
const express = require("express")
const router = express.Router()

router.post("/", PostController.addPost);

router.get("/", PostController.getAllPost);

router.get("/:id", PostController.getPost);

router.put("/:id", PostController.updatePost);

module.exports = router
