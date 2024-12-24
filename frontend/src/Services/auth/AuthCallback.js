import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import authService from "./authService";
import LoaderPage from "../../components/LoaderPage";

function AuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleCallback = async () => {
      const searchParams = new URLSearchParams(location.search);
      const accessToken = searchParams.get("accessToken");
      const refreshToken = searchParams.get("refreshToken");

      console.log('Received tokens:', { accessToken, refreshToken });

      if (accessToken && refreshToken) {
        authService.setTokens(accessToken, refreshToken);
        console.log('Tokens set, showing loader');
        
        // Show loader for 3 seconds
        setTimeout(() => {
          setLoading(false);
          console.log('Loader finished, navigating to home');
          navigate('/home', { replace: true });
        }, 3000);
      } else {
        console.error('No tokens received in callback');
        navigate('/signin', { replace: true });
      }
    };

    handleCallback();
  }, [navigate, location]);

  if (loading) {
    return <LoaderPage />;
  }

  return null;
}

export default AuthCallback;
