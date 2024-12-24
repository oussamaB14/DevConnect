// postService.js
import axios from "axios";
import authService from "../auth/authService";

const API_URL = process.env.REACT_APP_API_URL;

const postService = {
  createPost: async (postData) => {
    const token = authService.getTokens();
    const accessToken = token?.accessToken; // Get the access token
    try {
      const response = await axios.post(`${API_URL}post/add`, postData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json", // Assuming JWT token is stored in localStorage
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  },

  getPosts: async () => {
    try {
      const response = await axios.get(`${API_URL}post/all-posts`);
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  },

  updatePost: async (postId, updatedData) => {
    try {
      const response = await axios.put(
        `${API_URL}/posts/${postId}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  },

  deletePost: async (postId) => {
    try {
      const response = await axios.delete(`${API_URL}/posts/${postId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting post:", error);
      throw error;
    }
  },
  
  getPostsByUserId: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}post/user-posts/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching posts by user id:", error);
      throw error;
    }
  },
};

export default postService;
