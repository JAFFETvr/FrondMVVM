import { ClientRepository } from "../../data/Repository/client.repository";
export const updateClient = async (id, client) => {
  return await ClientRepository.modifyClient(id, client);
};
