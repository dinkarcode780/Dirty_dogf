import axiosInstance from "../../../services/axiosInstance";

export const getUserAPI = async () => {
  const res = await axiosInstance.get("/user");
  return res.data;
};

export const userUpdateAPI = async (user) => {
  const res = await axiosInstance.post("/user", user);
  return res.data;
};

