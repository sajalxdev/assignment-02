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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const order_model_1 = __importDefault(require("../models/order.model"));
const product_model_1 = __importDefault(require("../models/product.model"));
const createOrderInDB = (orderData, newQuantity) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.create(orderData);
    yield product_model_1.default.findByIdAndUpdate(orderData.productId, {
        "inventory.quantity": newQuantity,
        "inventory.inStock": newQuantity > 0,
    });
    return order;
});
const getAllOrdersFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    if (email)
        query.email = email;
    const orders = yield order_model_1.default.find(query);
    return orders;
});
exports.orderServices = {
    createOrderInDB,
    getAllOrdersFromDB,
};
