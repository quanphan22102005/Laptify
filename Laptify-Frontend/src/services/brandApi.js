import { axiosClient } from "@/lib/axiosClient.js";

export const getBrands = () => {
  return axiosClient.get(`/v1/brands`);
};