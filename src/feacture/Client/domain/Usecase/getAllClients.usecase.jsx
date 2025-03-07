import { ClientRepository } from "../../data/Repository/client.repository";
export const getAllClients = async () => {
  return await ClientRepository.fetchClients();
};
