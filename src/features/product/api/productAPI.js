import axiosInstance from "../../../services/axiosInstance";

export const getAllProductsAPI = async () => {
  const res = await axiosInstance.get("/products");
  return res.data;
};

export const createProductAPI = async (product) => {
  const res = await axiosInstance.post("/products", product);
  return res.data;
};

export const deleteProductAPI = async (id) => {
  const res = await axiosInstance.delete(`/products/${id}`);
  return res.data;
};
