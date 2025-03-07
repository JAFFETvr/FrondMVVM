const API_URL = "http://localhost:8080/equipments";

export const ProductAPI = {
  getAll: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Error al obtener productos");
      return await response.json();
    } catch (error) {
      console.error("Error en getAll:", error);
      return [];
    }
  },

  create: async (product) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!response.ok) throw new Error("Error al crear producto");
      return await response.json();
    } catch (error) {
      console.error("Error en create:", error);
    }
  },

  update: async (id, product) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!response.ok) throw new Error("Error al actualizar producto");
      return await response.json();
    } catch (error) {
      console.error("Error en update:", error);
    }
  },

  delete: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Error al eliminar producto");
      return true;
    } catch (error) {
      console.error("Error en delete:", error);
      return false;
    }
  },
};