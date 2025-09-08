import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../client";
import { useAuthStore } from "../../store/authStore";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string; // backend returns Token (casing) but we'll map to camelCase
  expires: string; // ISO string
  email: string;
  fullName: string;
  roles: string[];
}

interface RawLoginResponse {
  Token: string;
  Expires: string; // expecting DateTime serialized
  Email: string;
  FullName: string;
  Roles: string[];
}

async function loginRequest(data: LoginRequest): Promise<LoginResponse> {
  const res = await apiClient.post<RawLoginResponse>("/Auth/login", data);
  const payload = res.data;
  return {
    token: payload.Token,
    expires: payload.Expires,
    email: payload.Email,
    fullName: payload.FullName,
    roles: payload.Roles ?? [],
  };
}

export function useLogin() {
  const setSession = useAuthStore((s) => s.setSession);
  return useMutation({
    mutationKey: ["auth", "login"],
    mutationFn: loginRequest,
    onSuccess: (data: LoginResponse) => {
      setSession(data);
    },
  });
}
