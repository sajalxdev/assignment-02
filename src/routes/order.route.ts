import express from "express";
import { orderController } from "../controllers/order.controller";

const orderRouter = express.Router();

orderRouter
  .route("/")
  .post(orderController.createOrder)
  .get(orderController.getAllOrders);

export default orderRouter;
