import { ProductRepository } from "../../data/Repository/product.repository";

export const deleteProduct = async (id) => {
  return await ProductRepository.removeProduct(id);
};
