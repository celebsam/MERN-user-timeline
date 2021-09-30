const express = require("express");
const {
   getPosts,
   createPost,
   deletePost,
   getPostById,
   updatePost,
} = require("../controllers/postControllers");
const protect = require("../middlewares/tokenMiddleware");

const router = express.Router();

router.get("/", getPosts);
router.post("/", protect, createPost);
router.delete("/:id", deletePost);
router.get("/single-post/:id", getPostById);
router.put("/:id", updatePost);

module.exports = router;
