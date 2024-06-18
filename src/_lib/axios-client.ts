import axios from "axios";

const clientInstance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

clientInstance.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  } else {
    config.headers["Authorization"] = `Bearer ${
      import.meta.env.VITE_TMDB_API_KEY
    }`;
  }
  return config;
});

export { clientInstance };
