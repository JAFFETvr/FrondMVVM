import { useState, useEffect } from "react";
import { getAllProducts } from "../../domain/UseCase/getAllProducts.usecase";
import { createProduct } from "../../domain/UseCase/createProduct.usecase";
import { updateProduct } from "../../domain/UseCase/updateProduct.usecase";
import { deleteProduct } from "../../domain/UseCase/deleteProduct.usecase";

export const useProductViewModel = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    Id: null,
    Name: "",
    Price: "",
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const productsData = await getAllProducts();
    console.log("🔍 Respuesta completa de getAllProducts:", productsData);
  
    if (productsData && Array.isArray(productsData.products)) {
      setProducts(productsData.products);
      console.log("Productos establecidos:", productsData.products);
    } else {
      console.error("Estructura inesperada o array vacío:", productsData);
    }
  };
  

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "Price" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Id, ...productData } = formData;

    if (Id) {
      await updateProduct(Id, formData);
    } else {
      await createProduct(productData);
    }

    setFormData({ Id: null, Name: "", Price: "" });
    loadProducts();
  };

  const handleEdit = (product) => {
    setFormData(product);
  };

  const handleDelete = async (id) => {
    const success = await deleteProduct(id);
    if (success) loadProducts();
  };

  return { products, formData, handleInputChange, handleSubmit, handleEdit, handleDelete };
};
