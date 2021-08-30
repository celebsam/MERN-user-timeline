const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

const protect = async (req, res, next) => {
   const token = req.header("authorization");
   if (!token) {
      return res.status(401).send("Access Denied!");
   }
   try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(verified.id).select("-password");
      next();
   } catch (error) {
      res.status(400).send("Invalid Token");
   }
};

module.exports = protect;
