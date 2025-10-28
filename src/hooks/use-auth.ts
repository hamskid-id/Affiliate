import { Role } from "../types";

export function useAuth() {
  // Mocked role for now
  const role = Role.ADMIN as Role;

  return {
    role,
    user: { role },
    isAuthenticated: true,
  } as const;
}
