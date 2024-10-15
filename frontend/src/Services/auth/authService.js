// authService.js
import axios from "axios";
import { handleError } from "./errorHandler";

const API_URL = process.env.REACT_APP_API_URL;

const authService = {
  setTokens: (accessToken, refreshToken) => {
    if (accessToken && refreshToken) {
      const accessTokenExpiration = new Date().getTime() + 60 * 60 * 1000; // Example: 1-hour expiration
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem(
        "accessTokenExpiration",
        accessTokenExpiration.toString()
      );
    } else {
      authService.clearTokens();
    }
    window.dispatchEvent(new Event("storage"));
  },

  getTokens: () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const expiration = localStorage.getItem("accessTokenExpiration");
    return accessToken && refreshToken
      ? { accessToken, refreshToken, expiration }
      : null;
  },

  clearTokens: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessTokenExpiration");
    window.dispatchEvent(new Event("storage"));
  },

  isTokenExpired: () => {
    const expiration = localStorage.getItem("accessTokenExpiration");
    if (!expiration) return true;
    return new Date().getTime() > parseInt(expiration, 10);
  },

  refreshToken: async () => {
    try {
      const { refreshToken } = authService.getTokens();
      const response = await axios.post(`${API_URL}auth/refresh`, {
        refreshToken,
      });
      const { accessToken, refreshToken: newRefreshToken } = response.data;
      authService.setTokens(accessToken, newRefreshToken);
      return accessToken;
    } catch (error) {
      handleError(error);
      authService.clearTokens();
      throw error;
    }
  },
  isAuthenticated: () => {
    const tokens = authService.getTokens();
    return tokens && tokens.accessToken && !authService.isTokenExpired();
  },

  getUserInfo: async () => {
    try {
      const { accessToken } = authService.getTokens();
      const response = await axios.get(`${API_URL}user/profile`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    } catch (error) {
      handleError(error);
      authService.clearTokens();
      throw error;
    }
  },

  logout: () => {
    authService.clearTokens();
  },
};

export default authService;
