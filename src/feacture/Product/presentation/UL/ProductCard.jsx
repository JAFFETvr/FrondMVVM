import { useProductViewModel } from "../ViewModel/product.viewmodel";

export default function ProductCard() {
  const { products, formData, handleInputChange, handleSubmit, handleEdit, handleDelete } =
    useProductViewModel();

  console.log("✅ Productos en ProductCard:", products);

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gestión de Productos</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="Name"
          value={formData.Name || ""}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          placeholder="Nombre del producto"
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="number"
          name="Price"
          value={formData.Price || ""}
          onChange={(e) => handleInputChange(e.target.name, Number(e.target.value))}
          placeholder="Precio"
          className="border p-2 w-full mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {formData.Id ? "Actualizar" : "Agregar"}
        </button>
      </form>

      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.Id} className="border p-2 mb-2 flex justify-between">
              <div>
                <strong>{product.Name}</strong> - ${product.Price}
              </div>
              <div>
                <button
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                  onClick={() => handleEdit(product)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => handleDelete(product.Id)}
                >
                  Eliminar
                </button>
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
