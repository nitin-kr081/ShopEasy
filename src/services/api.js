import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000, // optional but good practice
});

// Get all products
export const fetchProducts = async () => {
  const res = await api.get("/products");
  return res.data.products;
};

// Get single product
export const fetchProductById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};