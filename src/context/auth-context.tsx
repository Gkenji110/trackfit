import { createContext, useState } from "react";
import type { AuthUser } from "../types/auth-user";
import { API_WORKOUT } from "../api/workout-api";
import Cookies from 'js-cookie';

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
      `${API_WORKOUT}/users?name=${username.toLocaleLowerCase()}` 
    );

    const [data]: AuthUser[] = await response.json();

    setUser(data);

    localStorage.setItem("user", JSON.stringify(data));
    Cookies.set("user", JSON.stringify(data));
  }

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