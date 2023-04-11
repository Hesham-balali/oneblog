import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.realworld.io/api",
});

instance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token"); // bad bad bad
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
