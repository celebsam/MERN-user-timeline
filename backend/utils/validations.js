const Joi = require("joi");

const registerValidation = (data) => {
   const schema = Joi.object({
      firstname: Joi.string().min(3).required(),
      lastname: Joi.string().min(3).required(),
      email: Joi.string().email().min(3).required(),
      password: Joi.string().min(5).required(),
      picture: Joi.string().min(3),
   });

   return schema.validate(data);
};

const loginValidation = (data) => {
   const schema = Joi.object({
      email: Joi.string().email().min(6).required(),
      password: Joi.string().min(5).required(),
   });

   return schema.validate(data);
};
module.exports = { registerValidation, loginValidation };
