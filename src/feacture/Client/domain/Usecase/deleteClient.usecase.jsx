import { ClientRepository } from "../../data/Repository/client.repository";
export const deleteClient = async (id) => {
  return await ClientRepository.removeClient(id);
};
