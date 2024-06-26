"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const order_route_1 = __importDefault(require("./routes/order.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/api/products", product_route_1.default);
app.use("/api/orders", order_route_1.default);
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the E-commerce API 🚀",
    });
});
app.get("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
exports.default = app;
