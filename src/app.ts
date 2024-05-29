import cors from "cors";
import express, { Request, Response } from "express";
import orderRouter from "./routes/order.route";
import productRouter from "./routes/product.route";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Welcome to the E-commerce API 🚀",
  });
});

app.get("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
