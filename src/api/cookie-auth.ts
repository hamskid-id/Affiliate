import { User } from "@/src/types";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

export function setAuthCookies(
  token: string,
  refresh_token: string,
  user: User
) {
  const cookieOptions = {
    maxAge: 60 * 60, // 1 hour
    path: "/",
    sameSite: "strict" as const,
    secure: process.env.NODE_ENV === "production",
  };

  setCookie("auth_token", token, cookieOptions);
  setCookie("auth_refresh_token", refresh_token, cookieOptions);
  setCookie("auth_user", JSON.stringify(user), cookieOptions);
}

export function clearAuthCookies() {
  deleteCookie("auth_token");
  deleteCookie("auth_refresh_token");
  deleteCookie("auth_user");
}

export function getAuthToken() {
  return getCookie("auth_token");
}

export function getAuthRefreshToken() {
  return getCookie("auth_refresh_token");
}

export function getAuthUser() {
  const rawUser = getCookie("auth_user");
  try {
    return rawUser ? JSON.parse(rawUser as string) : null;
  } catch (error) {
    console.error("Failed to parse auth_user cookie:", error);
    return null;
  }
}
