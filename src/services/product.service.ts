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

export const productServices = {
  createProductInDB,
  getAllProductsFromDB,
};
