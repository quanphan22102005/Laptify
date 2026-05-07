import { axiosClient } from "@/lib/axiosClient.js";

export const getCategories = () => {
  return axiosClient.get(`/v1/categories`);
};