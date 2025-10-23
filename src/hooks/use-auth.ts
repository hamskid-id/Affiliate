export type UserRole = "merchant" | "affiliate" | "admin";

export function useAuth() {
  const role: UserRole = "affiliate";

  return {
    role,
    user: role ? { role } : null,
    isAuthenticated: true,
  } as const;
}
