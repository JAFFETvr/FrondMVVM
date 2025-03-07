import { useState, useEffect } from "react";
import { createProduct } from "../../domain/UseCase/createProduct.usecase";
import { ProductRepository } from "../../data/Repository/product.repository";

export const useProductViewModel = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ id: null, name: "", category: "", condition: "" });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const productsData = await ProductRepository.fetchProducts();
    if (Array.isArray(productsData)) setProducts(productsData);
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, ...productData } = formData;
    if (id) await ProductRepository.modifyProduct(id, formData);
    else await createProduct(productData);
    setFormData({ id: null, name: "", category: "", condition: "" });
    loadProducts();
  };

  const handleEdit = (product) => setFormData(product);
  const handleDelete = async (id) => { if (await ProductRepository.removeProduct(id)) loadProducts(); };

  return { products, formData, handleInputChange, handleSubmit, handleEdit, handleDelete };
};
