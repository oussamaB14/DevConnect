import axios from 'axios';
export const handleError = (error) => {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      if (response) {
        console.error(`HTTP Error: ${response.status} ${response.statusText}`);
        if (response.status === 401) {
          console.warn('Unauthorized access - logging out');
          // Handle 401 errors, e.g., force logout
        }
      } else {
        console.error('Network error:', error.message);
      }
    } else {
      console.error('General error:', error.message);
    }
  };
  