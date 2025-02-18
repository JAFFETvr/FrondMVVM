import { ProductRepository } from "../../data/Repository/product.repository";

export const updateProduct = async (id, product) => {
  return await ProductRepository.modifyProduct(id, product);
};
