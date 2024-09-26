import axios from "axios";

const LogAPI = axios.create({
  baseURL: "http://localhost:8088/",
});

const Token = window.localStorage.getItem("accessToken") || null;

if (Token) {
  LogAPI.defaults.headers.Authorization = "Bearer " + Token;
}

LogAPI.interceptors.request.use(
  (config) => {
    console.log("Log API 요청:", config);
    return config;
  },
  (error) => {
    console.error("Log API 요청 오류:", error);
    return Promise.reject(error);
  }
);

export { LogAPI };
