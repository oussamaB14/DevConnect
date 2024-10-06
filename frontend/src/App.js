import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import HomeRoutes from "./routes/HomeRoutes";
import AuthCallback from "./Services/auth/AuthCallback";
import ProtectedRoute from "./Services/auth/ProtectedRoutes";
import { initFlowbite } from "./utils/flowbite-init";
import authService from "./Services/auth/authService";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    initFlowbite();
    const checkAuth = () => {
      const authStatus = authService.isAuthenticated();
      console.log("App - Checking auth status:", authStatus);
      setIsAuthenticated(authStatus);
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/*" element={<AppRoutes />} />
        
        {/* Protected routes */}
        <Route
          path="/home/*"
          element={
            <ProtectedRoute>
              <HomeRoutes />
            </ProtectedRoute>
          }
        />
        
        {/* Auth callback route */}
        <Route path="/auth/callback" element={<AuthCallback />} />
        
        {/* Redirect authenticated users trying to access public routes */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
