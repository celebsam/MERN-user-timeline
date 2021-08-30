const express = require("express");
const { getPosts, createPost } = require("../controllers/postControllers");
const protect = require("../middlewares/tokenMiddleware");

const router = express.Router();

router.get("/", getPosts);
router.post("/", protect, createPost);

module.exports = router;
