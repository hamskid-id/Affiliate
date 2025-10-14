import { AxiosResponse } from "axios";
import { ApiResponse, User } from ".";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface PasswordResetResponse {
  message: string;
  success: boolean;
}
