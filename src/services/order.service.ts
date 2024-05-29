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

const getAllOrdersFromDB = async (email: string) => {
  let query: {
    email?: string;
  } = {};

  if (email) query.email = email;

  const orders = await Order.find(query);

  return orders;
};

export const orderServices = {
  createOrderInDB,
  getAllOrdersFromDB,
};
