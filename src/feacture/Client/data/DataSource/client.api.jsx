// data/DataSource/client.api.js
const API_URL = "http://localhost:8080/clients/";

export const ClientAPI = {
  getAll: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Error al obtener clientes");
      return await response.json();
    } catch (error) {
      console.error("Error en getAll:", error);
      return [];
    }
  },

  create: async (client) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
      });
      if (!response.ok) throw new Error("Error al crear cliente");
      return await response.json();
    } catch (error) {
      console.error("Error en create:", error);
    }
  },

  update: async (id, client) => {
    try {
      const response = await fetch(`${API_URL}${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
      });
      if (!response.ok) throw new Error("Error al actualizar cliente");
      return await response.json();
    } catch (error) {
      console.error("Error en update:", error);
    }
  },

  delete: async (id) => {
    try {
      const response = await fetch(`${API_URL}${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Error al eliminar cliente");
      return true;
    } catch (error) {
      console.error("Error en delete:", error);
      return false;
    }
  },
};