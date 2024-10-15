import React, { createContext, useState, useContext, useEffect } from "react";
import authService from "../Services/auth/authService";
import { handleError } from "../Services/auth/errorHandler";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const tokens = authService.getTokens();
      if (tokens) {
        await fetchUserProfile();
      }
      setLoading(false);
    };
    initializeAuth();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const userInfo = await authService.getUserInfo();
      if (userInfo) {
        setUser(userInfo);
      } else {
        authService.clearTokens();
        setUser(null);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const loginWithEmailPassword = async (email, password) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { accessToken, refreshToken } = await response.json();
        authService.setTokens(accessToken, refreshToken);
        await fetchUserProfile();
      } else {
        throw new Error("Failed to login");
      }
    } catch (error) {
      console.error("Failed to login with email and password:", error);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginWithEmailPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
