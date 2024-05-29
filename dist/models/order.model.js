"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const orderSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        validate: [validator_1.default.isEmail, "Invalid email address"],
    },
    productId: {
        type: String,
        required: [true, "Product ID is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"],
    },
});
const Order = mongoose_1.default.model("Order", orderSchema);
exports.default = Order;
