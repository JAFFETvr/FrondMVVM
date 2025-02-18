const API_URL = "http://localhost:8080/products";

export const ProductAPI = {
  getAll: async () => (await fetch(API_URL)).json(),

  create: async (product) =>
    (await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })).json(),

  update: async (id, product) =>
    (await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })).json(),

  delete: async (id) => fetch(`${API_URL}/${id}`, { method: "DELETE" }),
};
