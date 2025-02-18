import { ProductAPI } from "../DataSource/product.api";

export const ProductRepository = {
  fetchProducts: async () => await ProductAPI.getAll(),
  addProduct: async (product) => await ProductAPI.create(product),
  modifyProduct: async (id, product) => await ProductAPI.update(id, product),
  removeProduct: async (id) => await ProductAPI.delete(id),
};
