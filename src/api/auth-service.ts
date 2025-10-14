import apiClient from "./client";
import { AxiosResponse } from "axios";
import { ApiResponse } from "../types";
import { LoginCredentials, LoginResponse } from "@/src/types/auth";

export const authService = {
  login: async (
    credentials: LoginCredentials,
  ): Promise<AxiosResponse<ApiResponse<LoginResponse>>> => {
    return apiClient.post<ApiResponse<LoginResponse>>(
      "/auth/login",
      credentials,
    );
  },

  resetPassword: async (
    newPassword: string,
    token: string,
  ): Promise<AxiosResponse<ApiResponse<null>>> => {
    const payload = {
      password: newPassword,
      token: token,
    };

    return apiClient.post("/auth/password-setup", payload);
  },
};
