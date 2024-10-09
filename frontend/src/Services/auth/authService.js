import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const authService = {
  setTokens: (accessToken, refreshToken) => {
    if (accessToken && refreshToken) {
      localStorage.setItem('user', JSON.stringify({ accessToken, refreshToken }));
      console.log('Tokens set in localStorage:', { accessToken, refreshToken });
    } else {
      localStorage.removeItem('user');
      console.log('Tokens removed from localStorage');
    }
    window.dispatchEvent(new Event('storage'));
  },

  getTokens: () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('Retrieved tokens from localStorage:', user);
    return user ? { accessToken: user.accessToken, refreshToken: user.refreshToken } : null;
  },

  getToken: () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("Getting token:", user?.token);
    return user?.token;
  },

  login: async (googleToken) => {
    console.log("Logging in with Google token:", googleToken);
    const response = await axios.post(`${API_URL}auth/google/login`, { token: googleToken });
    console.log("Full login response:", response);
    if (response.data && response.data.accessToken && response.data.refreshToken) {
      authService.setTokens(response.data.accessToken, response.data.refreshToken);
    } else {
      console.error("No tokens received from backend");
    }
    return response.data;
  },

  logout: () => {
    console.log("Logging out");
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('storage'));
  },

  // clearTokens: () => {
  //   console.log("Clearing tokens");
  //   localStorage.removeItem('user');
  // },

  isAuthenticated: () => {
    const tokens = authService.getTokens();
    const isAuth = !!tokens?.accessToken;
    console.log('isAuthenticated:', isAuth);
    return isAuth;
  },

  initiateGoogleLogin: () => {
    window.location.href = `${API_URL}auth/google/login`;
  },

  getUserInfo: async () => {
    const tokens = authService.getTokens();
    if (!tokens) {
      console.error('No tokens available');
      return null;
    }
    try {
      const response = await axios.get(`${API_URL}user/info`, {
        headers: { Authorization: `Bearer ${tokens.accessToken}` }
      });
      console.log('User info received:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      return null;
    }
  },
  // ... other methods ...
};

export default authService;
