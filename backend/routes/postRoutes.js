const express = require("express");
const {
   getPosts,
   createPost,
   deletePost,
   getPostById,
} = require("../controllers/postControllers");
const protect = require("../middlewares/tokenMiddleware");

const router = express.Router();

router.get("/", getPosts);
router.post("/", protect, createPost);
router.delete("/:id", deletePost);
router.get("/delete/:id", getPostById);

module.exports = router;
