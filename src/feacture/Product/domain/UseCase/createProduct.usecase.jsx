import { ProductRepository } from "../../data/Repository/product.repository";

export const createProduct = async (product) => {
  return await ProductRepository.addProduct(product);
};
