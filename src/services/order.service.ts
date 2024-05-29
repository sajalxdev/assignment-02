import { TOrder } from "../interfaces/order.interface";
import Order from "../models/order.model";
import Product from "../models/product.model";

const createOrderInDB = async (orderData: TOrder, newQuantity: number) => {
  const order = await Order.create(orderData);

  await Product.findByIdAndUpdate(orderData.productId, {
    "inventory.quantity": newQuantity,
    "inventory.inStock": newQuantity > 0,
  });

  return order;
};

export const orderServices = {
  createOrderInDB,
};
