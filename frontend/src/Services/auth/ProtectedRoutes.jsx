import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import authService from './authService';

function ProtectedRoute({ children }) {
  const isAuthenticated = authService.isAuthenticated();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;