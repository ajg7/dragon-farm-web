import axios, { AxiosHeaders } from "axios";
import { useAuthStore } from "../store/authStore";

// Central axios instance for the app
export const apiClient = axios.create({
  baseURL: "https://localhost:7047/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

// Attach auth header dynamically if token present
apiClient.interceptors.request.use((config) => {
  try {
    const token = useAuthStore.getState().session?.token;
    if (token) {
      if (config.headers instanceof AxiosHeaders) {
        config.headers.set("Authorization", `Bearer ${token}`);
      } else if (config.headers) {
        (config.headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
      } else {
        config.headers = new AxiosHeaders({ Authorization: `Bearer ${token}` });
      }
    }
  } catch {
    // noop
  }
  return config;
});

// Future: response interceptor for refresh / logout on 401
