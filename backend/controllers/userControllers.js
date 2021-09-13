const User = require("../models/userModels");
const { registerValidation, loginValidation } = require("../utils/validations");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
   const { error } = registerValidation(req.body);
   if (error) {
      return res.status(400).send(error.details[0].message);
   }

   const exist = await User.findOne({ email: req.body.email });
   if (exist) {
      return res.status(400).send("The email already exist");
   } else {
      try {
         const user = new User(req.body);
         await user.save();

         if (user) {
            res.status(201).json({
               _id: user._id,
               firstname: user.firstname,
               lastname: user.lastname,
               email: user.email,
               picture: user.picture,
               token: generateToken(user._id),
            });
         } else {
            res.status(400).json({ message: "user creation failed." });
         }
      } catch (error) {
         res.send(error);
      }
   }
};

const loginUser = async (req, res) => {
   try {
      const { error } = loginValidation(req.body);
      if (error) {
         return res.status(400).send(error.details[0].message);
      }

      const user = await User.findOne({ email: req.body.email });

      if (user && (await user.matchPasswords(req.body.password))) {
         res.status(201).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            picture: user.picture,
            token: generateToken(user._id),
         });
      } else {
         res.status(404).send("User not found");
      }
   } catch (error) {
      res.send(error.message);
   }
};

module.exports = { registerUser, loginUser };
