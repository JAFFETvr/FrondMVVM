import { ProductRepository } from "../../data/Repository/product.repository";

export const getAllProducts = async () => {
  const products = await ProductRepository.fetchProducts();
  console.log("Productos obtenidos en getAllProducts:", products); // 🔍 Verifica aquí
  return products;
};
