const {Post} = require("../model/PostModel")

const PostController = {
    //get All Post
    addPost: async (req, res) => {
        res.status(200).json(req.body);
    },
}

module.exports = PostController