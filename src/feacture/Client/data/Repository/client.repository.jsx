import { ClientAPI } from "../DataSource/client.api";

export const ClientRepository = {
  fetchClients: async () => await ClientAPI.getAll(),
  addClient: async (client) => await ClientAPI.create(client),
  modifyClient: async (id, client) => await ClientAPI.update(id, client),
  removeClient: async (id) => await ClientAPI.delete(id),
};