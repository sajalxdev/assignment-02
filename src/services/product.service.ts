import { TProduct } from "../interfaces/product.interface";
import Product from "../models/product.model";

const createProductInDB = async (productData: TProduct) => {
  const product = await Product.create(productData);

  return product;
};

const getAllProductsFromDB = async () => {
  const products = await Product.find();

  return products;
};

const getProductByIdFromDB = async (productId: string) => {
  const product = await Product.findById(productId);

  return product;
};

const deleteProductByIdFromDB = async (productId: string) => {
  const product = await Product.findByIdAndDelete(productId);

  return product;
};

export const productServices = {
  createProductInDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  deleteProductByIdFromDB,
};
