import { ClientRepository } from "../../data/Repository/client.repository";
export const createClient = async (client) => {
  return await ClientRepository.addClient(client);
};