const express = require("express");
const {
   getPosts,
   createPost,
   deletePost,
} = require("../controllers/postControllers");
const protect = require("../middlewares/tokenMiddleware");

const router = express.Router();

router.get("/", getPosts);
router.post("/", protect, createPost);
router.delete("/:id", deletePost);

module.exports = router;
