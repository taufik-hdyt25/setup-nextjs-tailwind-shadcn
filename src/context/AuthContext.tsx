"use client";

import callAPI from "@/utils/fetcher/fetcher";
import Cookies from "js-cookie";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  user: any | null;
  isAuthenticated: boolean;

  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProfile = async (token: string) => {
    const res = await callAPI<{ user: any }>({
      method: "GET",
      path: "/auth/me",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(res.user);
    return res;
  };

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (token) {
      getProfile(token);
    }
    setIsLoading(false);
  }, []);

  const logout = () => {
    Cookies.remove("auth_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
