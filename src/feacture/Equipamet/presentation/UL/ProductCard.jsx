import { useProductViewModel } from "../ViewModel/product.viewmodel";

export default function ProductCard() {
  const { products, formData, handleInputChange, handleSubmit, handleEdit, handleDelete } = useProductViewModel();

  // Ajustar los datos que provienen de la API para que coincidan con los nombres de campos esperados
  const mappedProducts = products.map(product => ({
    id: product.id,
    name: product.cname, // Mapeamos 'cname' a 'name'
    category: product.category,
    condition: product.ccondition, // Mapeamos 'ccondition' a 'condition'
  }));

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gestión de Productos</h2>
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
