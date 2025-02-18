const API_URL = "http://localhost:8080/products";

export const ProductAPI = {
  getAll: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Error al obtener productos");
      return await response.json();
       // Devuelve un array de objetos con { Id, Name, Price }
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
        body: JSON.stringify({
          Name: product.Name,
          Price: Number(product.Price),
        }),
      });

      if (!response.ok) throw new Error("Error al crear producto");
      return await response.json(); // Devuelve el objeto creado con { Id, Name, Price }
    } catch (error) {
      console.error("Error en create:", error);
    }
  },

  update: async (id, product) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Id: id,
          Name: product.Name,
          Price: Number(product.Price),
        }),
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
