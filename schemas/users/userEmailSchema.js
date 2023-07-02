const Joi = require("joi");

const userEmailSchema = Joi.object({
  email: Joi.string().email().required(),
}).messages({
  "any.required": "missing required field {#key}",
});

module.exports = userEmailSchema;
