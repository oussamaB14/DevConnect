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

  // function PrivateRoute({ children }) {
  //   const location = useLocation();
  //   console.log('PrivateRoute - isAuthenticated:', isAuthenticated);
  //   if (!isAuthenticated) {
  //     console.log('Redirecting to signin from:', location.pathname);
  //     return <Navigate to="/signin" state={{ from: location }} replace />;
  //   }
  //   return children;
  // }

  function PublicRoute({ children }) {
    console.log("PublicRoute - isAuthenticated:", isAuthenticated);
    if (isAuthenticated) {
      console.log("Redirecting to home from public route");
      return <Navigate to="/home" replace />;
    }
    return children;
  }

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomeRoutes />} />
        <Route
          path="/*"
          element={
            <PublicRoute>
              <AppRoutes />
            </PublicRoute>
          }
        />
        {/* <Route path="/home/*" element={<PrivateRoute><HomeRoutes /></PrivateRoute>} /> */}
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
