import express from "express";
import { productControllers } from "../controllers/product.controller";

const productRouter = express.Router();

productRouter
  .route("/")
  .post(productControllers.createProduct)
  .get(productControllers.getAllProducts);

productRouter
  .route("/:id")
  .get(productControllers.getProductById)
  .delete(productControllers.deleteProductById);

export default productRouter;
