import { Request, Response } from "express";
import { orderServices } from "../services/order.service";
import { productServices } from "../services/product.service";
import { orderSchema } from "../validators/order.validator";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const { error, value: validOrderData } = orderSchema.validate(orderData);

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid order data",
        error: error,
      });
    }

    const product = await productServices.getProductByIdFromDB(
      validOrderData.productId
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (product.inventory.quantity < validOrderData.quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    const newQuantity = product.inventory.quantity - validOrderData.quantity;

    const order = await orderServices.createOrderInDB(
      validOrderData,
      newQuantity
    );

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    const orders = await orderServices.getAllOrdersFromDB(email);

    res.status(200).json({
      success: true,
      message: email
        ? "Orders fetched successfully for user email!"
        : "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Orders not found",
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrders,
};
