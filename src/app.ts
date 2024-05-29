import cors from "cors";
import express from "express";
import orderRouter from "./routes/order.route";
import productRouter from "./routes/product.route";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
