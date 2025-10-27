import { createContext, useEffect, useState } from "react";
import type { AuthUser } from "../types/auth-user";

interface AuthContextProps {
  user: AuthUser | null;
  login: (username: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);

  async function login(username: string) {
    // chamar API de Get User

    const response = await fetch(
      `http://localhost:4000/users?name=${username.toLocaleLowerCase()}` 
    );

    const [data]: AuthUser[] = await response.json();

    setUser(data);

    localStorage.setItem("user", JSON.stringify(data));
  }

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (!data) {
      setUser(null);
      return;
    }

    const user: AuthUser = JSON.parse(data);

    setUser(user);
  }, []);

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}