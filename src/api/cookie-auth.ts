import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { JWTPayload, SignJWT, jwtVerify } from "jose";

const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET || "super-secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export function setAuthCookies(token: string, userId: string) {
  setCookie("auth_token", token, {
    maxAge: 60 * 60, // 1 hour
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  setCookie("auth_user_id", userId, {
    maxAge: 60 * 60,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
}

export function clearAuthCookies() {
  deleteCookie("auth_token");
  deleteCookie("auth_user_id");
}

export function getAuthToken() {
  return getCookie("auth_token");
}

export function getAuthUserId() {
  return getCookie("auth_user_id");
}
