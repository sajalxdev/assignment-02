"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const productRouter = express_1.default.Router();
productRouter
    .route("/")
    .post(product_controller_1.productControllers.createProduct)
    .get(product_controller_1.productControllers.getAllProducts);
exports.default = productRouter;
