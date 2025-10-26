import { Role } from "../types";

export function useAuth() {
  const role: Role = Role.AFFILIATE;

  return {
    role,
    user: role ? { role } : null,
    isAuthenticated: true,
  } as const;
}
