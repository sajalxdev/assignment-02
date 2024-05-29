import { Request, Response } from "express";
import { productServices } from "../services/product.service";
import { productSchema } from "../validators/product.validator";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const { error, value: validProductData } =
      productSchema.validate(productData);

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid product data",
        error: error,
      });
    }

    const product = await productServices.createProductInDB(validProductData);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export const productControllers = {
  createProduct,
  getAllProducts,
};
