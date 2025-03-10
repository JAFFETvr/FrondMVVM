import React, { useEffect, useState } from "react";
import { useProductViewModel } from "../ViewModel/product.viewmodel";

export default function ProductCard() {
  const { products, formData, handleInputChange, handleSubmit, handleEdit, handleDelete } = useProductViewModel();
  
  const [socketMessage, setSocketMessage] = useState("");

  const mappedProducts = products.map(product => ({
    id: product.id,
    name: product.cname, // Mapeamos 'cname' a 'name'
    category: product.category,
    condition: product.ccondition, // Mapeamos 'ccondition' a 'condition'
  }));

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8081/ws");

    socket.onmessage = (event) => {
      setSocketMessage(event.data); // Actualiza el estado con el mensaje recibido
    };

    socket.onopen = () => {
      console.log("Conectado al WebSocket");
    };

    socket.onclose = () => {
      console.log("Conexión WebSocket cerrada");
    };

    socket.onerror = (error) => {
      console.error("Error en WebSocket", error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gestión de Productos</h2>

      {socketMessage && (
        <p className="bg-gray-200 p-2 rounded text-center mb-4">
          Mensaje en tiempo real: {socketMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          placeholder="Nombre del producto"
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category || ""}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          placeholder="Categoría"
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          name="condition"
          value={formData.condition || ""}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          placeholder="Condición"
          className="border p-2 w-full mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {formData.id ? "Actualizar" : "Agregar"}
        </button>
      </form>

      <ul>
        {mappedProducts.length > 0 ? (
          mappedProducts.map((product) => (
            <li key={product.id} className="border p-2 mb-2 flex justify-between">
              <div>
                <strong>{product.name}</strong> - {product.category} ({product.condition})
              </div>
              <div>
                <button className="bg-yellow-500 text-white px-2 py-1 mr-2" onClick={() => handleEdit(product)}>Editar</button>
                <button className="bg-red-500 text-white px-2 py-1" onClick={() => handleDelete(product.id)}>Eliminar</button>
              </div>
            </li>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </ul>
    </div>
  );
}
