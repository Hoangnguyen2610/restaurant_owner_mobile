// axiosInstance.ts
import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://b36a-2405-4800-5716-1560-8d89-3a68-30e2-e7a6.ngrok-free.app", // Replace with your base API URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000, // Set a timeout (optional)
});

export default axiosInstance;
