import axios from "axios";
import authService from "../auth/authService";

const API_URL = process.env.REACT_APP_API_URL;

const commentService = {
  createComment: async (postId, commentData) => {
    const token = authService.getTokens();
    const accessToken = token?.accessToken; // Get the access token
    try {
      const response = await axios.post(
        `${API_URL}/posts/${postId}/comments`,
        commentData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json", // Assuming JWT token is stored in localStorage
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating comment:", error);
      throw error;
    }
  },

  updateComment: async (postId, commentId, updatedData) => {
    try {
      const response = await axios.put(
        `${API_URL}/posts/${postId}/comments/${commentId}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating comment:", error);
      throw error;
    }
  },

  deleteComment: async (postId, commentId) => {
    try {
      const response = await axios.delete(
        `${API_URL}/posts/${postId}/comments/${commentId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting comment:", error);
      throw error;
    }
  },
};

export const getCommentsByPostId = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

export default commentService;
