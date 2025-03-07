import { useState, useEffect } from "react";
import { getAllClients } from "../../domain/Usecase/getAllClients.usecase";
import { createClient } from "../../domain/Usecase/createClient.usecase";
import { updateClient } from "../../domain/Usecase/updateClient.usecase";
import { deleteClient } from "../../domain/Usecase/deleteClient.usecase";

export const useClientViewModel = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({ Id: null, Name: "", Direccion: "" });

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const clientsData = await getAllClients();
    if (clientsData && Array.isArray(clientsData)) {
      setClients(clientsData);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.Id) {
      await updateClient(formData.Id, formData);
    } else {
      await createClient(formData);
    }
    setFormData({ Id: null, Name: "", Direccion: "" });
    loadClients();
  };

  const handleEdit = (client) => {
    setFormData(client);
  };

  const handleDelete = async (id) => {
    await deleteClient(id);
    loadClients();
  };

  return { clients, formData, handleInputChange, handleSubmit, handleEdit, handleDelete };
};
