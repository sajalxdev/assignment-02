"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("../services/order.service");
const product_service_1 = require("../services/product.service");
const order_validator_1 = require("../validators/order.validator");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const { error, value: validOrderData } = order_validator_1.orderSchema.validate(orderData);
        if (error) {
            return res.status(400).json({
                success: false,
                message: "Invalid order data",
                error: error,
            });
        }
        const product = yield product_service_1.productServices.getProductByIdFromDB(validOrderData.productId);
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
        const order = yield order_service_1.orderServices.createOrderInDB(validOrderData, newQuantity);
        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: order,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const orders = yield order_service_1.orderServices.getAllOrdersFromDB(email);
        res.status(200).json({
            success: true,
            message: email
                ? "Orders fetched successfully for user email!"
                : "Orders fetched successfully",
            data: orders,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Orders not found",
        });
    }
});
exports.orderController = {
    createOrder,
    getAllOrders,
};
