import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import authService from "./authService";

function AuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleCallback = async () => {
      const searchParams = new URLSearchParams(location.search);
      const accessToken = searchParams.get("accessToken");
      const refreshToken = searchParams.get("refreshToken");

      console.log('Received tokens:', { accessToken, refreshToken });

      if (accessToken && refreshToken) {
        authService.setTokens(accessToken, refreshToken);
        console.log('Tokens set, navigating to home');
        navigate('/home', { replace: true });
      } else {
        console.error('No tokens received in callback');
        navigate('/signin', { replace: true });
      }
    };

    handleCallback();
  }, [navigate, location]);

  return <div>Authenticating...</div>;
}

export default AuthCallback;
