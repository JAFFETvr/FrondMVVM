import { ProductAPI } from "../DataSource/product.api";

export const ProductRepository = {
  fetchProducts: async () => {
    const response = await ProductAPI.getAll();
    console.log("Productos obtenidos en ProductRepository:", response); // 🔍 Verifica aquí
    return response;
  },  addProduct: async (product) => await ProductAPI.create(product),
  modifyProduct: async (id, product) => await ProductAPI.update(id, product),
  removeProduct: async (id) => await ProductAPI.delete(id),
};
