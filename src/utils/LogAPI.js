import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const LogAPI = axios.create({
  baseURL: "http://localhost:8088/",
});

LogAPI.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const token = authStore.accessToken || localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Log API 요청:", config);
    return config;
  },
  (error) => {
    console.error("Log API 요청 오류:", error);
    return Promise.reject(error);
  }
);

export { LogAPI };
