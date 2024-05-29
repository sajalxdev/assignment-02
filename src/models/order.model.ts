import mongoose from "mongoose";
import validator from "validator";
import { TOrder } from "../interfaces/order.interface";

const orderSchema = new mongoose.Schema<TOrder>({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    validate: [validator.isEmail, "Invalid email address"],
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

const Order = mongoose.model<TOrder>("Order", orderSchema);

export default Order;
