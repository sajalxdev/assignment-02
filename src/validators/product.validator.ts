import Joi from "joi";

export const variantSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
});

export const inventorySchema = Joi.object({
  quantity: Joi.number().required(),
  inStock: Joi.boolean().default(true),
});

export const productSchema = Joi.object({
  name: Joi.string().required().min(3).max(100).messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name should have a minimum length of {#limit}",
    "string.max": "Name should have a maximum length of {#limit}",
    "any.required": "Name is required",
  }),
  description: Joi.string().required().min(10).max(500),
  price: Joi.number().required().min(0),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).default([]),
  variants: Joi.array().items(variantSchema),
  inventory: inventorySchema,
});
