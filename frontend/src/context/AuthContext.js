import React, { createContext, useState, useContext, useEffect } from "react";
import authService from "../Services/auth/authService";
// import { Navigate } from "react-router-dom";
// import axios from 'axios';
const AuthContext = createContext(null);
const API_URL = process.env.REACT_APP_API_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // const signup = async (data) => {
  //   try {
  //     const response = await axios.post(`${API_URL}auth/signup`, data);
  //     const { accessToken, refreshToken, user } = response.data;
  //     localStorage.setItem("accessToken", accessToken);
  //     localStorage.setItem("refreshToken", refreshToken);
  //     setUser(user);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    // Check if there's a stored token and fetch user data if it exists
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserProfile = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log("Fetching user profile with access token:", accessToken);
      const response = await fetch(`${API_URL}user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        const userInfo = await response.json();
        console.log("Fetched user profile:", userInfo);
        setUser(userData);
      } else {
        // Token might be invalid, clear it
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const login = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    fetchUserProfile();
  };

  const logout = () => {
    authService.clearTokens();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
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
