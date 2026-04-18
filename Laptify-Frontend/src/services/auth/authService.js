import { axiosClient } from "@/lib/axiosClient.js";

export const authService = {
  register: async (userData) => {
    try {
      const response = await axiosClient.post("/auth/register", userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  login: async (credentials) => {
    try {
      const response = await axiosClient.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  logout: async () => {
    try {
      await axiosClient.post("/auth/logout");
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
