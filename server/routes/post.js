const PostController = require("../controllers/postController")
const express = require("express")
const router = express.Router()

router.post("/", PostController.addPost);

module.exports = router
