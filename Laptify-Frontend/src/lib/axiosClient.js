import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:8080' + '/api',
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Allow cookies for refresh token
})

// Request interceptor to add access token to headers
axiosClient.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle token refresh on 401
axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // If we get 401 and haven't already tried to refresh, attempt refresh
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Call refresh token endpoint
                const refreshResponse = await axios.post(
                    'http://localhost:8080/api/auth/refresh-token',
                    {},
                    {
                        withCredentials: true,
                    }
                );

                const { accessToken } = refreshResponse.data;
                localStorage.setItem("accessToken", accessToken);

                // Retry original request with new token
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return axiosClient(originalRequest);
            } catch (refreshError) {
                // Refresh failed, logout user
                localStorage.removeItem("accessToken");
                localStorage.removeItem("user");
                window.location.href = "/login";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export const getErrorMessage = (err, message) => {
  let res = message;
  if (axios.isAxiosError(err)) res = err.response?.data.message || message;
  return res;
};
