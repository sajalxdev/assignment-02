import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: [3, "Name must be at least 3 characters long"],
    maxLength: [100, "Name must be at most 100 characters long"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    minLength: [10, "Description must be at least 10 characters long"],
    maxLength: [500, "Description must be at most 500 characters long"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive number"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  variants: [
    {
      type: {
        type: String,
        required: [true, "Variant type is required"],
        trim: true,
      },
      value: {
        type: String,
        required: [true, "Variant value is required"],
        trim: true,
      },
    },
  ],
  inventory: {
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [0, "Quantity must be a positive number"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
