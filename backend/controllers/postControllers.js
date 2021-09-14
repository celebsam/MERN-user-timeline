const asyncHandler = require("express-async-handler");
const Post = require("../models/postModels");

const getPosts = asyncHandler(async (req, res) => {
   try {
      const posts = await Post.find().populate("user");
      if (!posts) {
         res.status(404).send("No post was found.");
      }

      res.send(posts);
   } catch (error) {
      res.status(500).send(error.message);
   }
});
const createPost = async (req, res) => {
   try {
      const post = new Post({ ...req.body, user: req.user.id });
      await post.save();
      res.send(post);
   } catch (error) {
      res.status(500).send(error.message);
   }
};

module.exports = { getPosts, createPost };
