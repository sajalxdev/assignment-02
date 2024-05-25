"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = exports.inventorySchema = exports.variantSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.variantSchema = joi_1.default.object({
    type: joi_1.default.string().required(),
    value: joi_1.default.string().required(),
});
exports.inventorySchema = joi_1.default.object({
    quantity: joi_1.default.number().required(),
    inStock: joi_1.default.boolean().default(true),
});
exports.productSchema = joi_1.default.object({
    name: joi_1.default.string().required().min(3).max(100).messages({
        "string.base": "Name must be a string",
        "string.empty": "Name cannot be empty",
        "string.min": "Name should have a minimum length of {#limit}",
        "string.max": "Name should have a maximum length of {#limit}",
        "any.required": "Name is required",
    }),
    description: joi_1.default.string().required().min(10).max(500),
    price: joi_1.default.number().required().min(0),
    category: joi_1.default.string().required(),
    tags: joi_1.default.array().items(joi_1.default.string()).default([]),
    variants: joi_1.default.array().items(exports.variantSchema),
    inventory: exports.inventorySchema,
});
