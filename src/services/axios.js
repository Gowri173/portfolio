import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://portfolio-qy70.onrender.com";
console.log("=== AXIOS LOADED ===");
console.log("API URL:", import.meta.env.VITE_API_URL);
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

api.interceptors.request.use(
  (config) => {
    console.log(
      `[API REQUEST] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`
    );
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[API ERROR]", error);

    if (error.response) {
      console.error(
        "Server Error:",
        error.response.status,
        error.response.data
      );
    }

    return Promise.reject(error);
  }
);

export default api;
