const Post = require("../model/PostModel")

const PostController = {
    addPost: async (req, res) => {
        try {
            const newPost = new Post(req.body);
            const savedPost = await newPost.save();
            res.status(200).json(savedPost)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    getPost : async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            res.status(200).json(post);
        }
        catch  (err) {
            res.status(500).json(err);
        }
    },

    getAllPost : async (req, res) => {
        try {
            const post = await Post.find();
            res.status(200).json(post)
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    updatePost : async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            await post.updateOne({$set: req.body});
            res.status(200).json("Updated!!!");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = PostController