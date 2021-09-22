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

const deletePost = async (req, res) => {
   const id = req.params.id;
   try {
      const post = await Post.findById(id);
      if (!post) {
         return res.status(404).json({ message: "Post not found" });
      } else {
         await Post.deleteOne({ _id: id });
         res.json({ message: "Post deleted successfully" });
      }
   } catch (error) {
      res.status(500).send(error.message);
   }
};

const getPostById = async (req, res) => {
   const id = req.params.id;

   try {
      const post = await Post.findById(id);
      if (!post) {
         res.status(404).json({ message: "Post not found." });
      } else {
         res.send(post);
      }
   } catch (error) {
      res.status(500).json({ message: "Internal server error" });
   }
};

module.exports = { getPosts, createPost, deletePost, getPostById };
