import express from "express";
import { productControllers } from "../controllers/product.controller";

const productRouter = express.Router();

productRouter.route("/").post(productControllers.createProduct);

export default productRouter;
