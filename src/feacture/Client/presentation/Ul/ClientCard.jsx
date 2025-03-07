import { useClientViewModel } from "../ViewModel/client.viewmodel";

export default function ClientCard() {
  const { clients, formData, handleInputChange, handleSubmit, handleEdit, handleDelete } =
    useClientViewModel();

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gestión de Clientes</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="Name"
          value={formData.Name || ""}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          placeholder="Nombre del cliente"
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          name="Direccion"
          value={formData.Direccion || ""}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          placeholder="Dirección"
          className="border p-2 w-full mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {formData.Id ? "Actualizar" : "Agregar"}
        </button>
      </form>

      <ul>
        {clients.length > 0 ? (
          clients.map((client) => (
            <li key={client.Id} className="border p-2 mb-2 flex justify-between">
              <div>
                <strong>{client.Name}</strong> - {client.Direccion}
              </div>
              <div>
                <button
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                  onClick={() => handleEdit(client)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => handleDelete(client.Id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No hay clientes disponibles.</p>
        )}
      </ul>
    </div>
  );
}