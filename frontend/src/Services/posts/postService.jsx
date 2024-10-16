// postService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const postService = {
  createPost: async (postData) => {
    try {
      const response = await axios.post(`${API_URL}/post/add`, postData);
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },

  getPosts: async () => {
    try {
      const response = await axios.get(`${API_URL}post/all-posts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  updatePost: async (postId, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/posts/${postId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  },

  deletePost: async (postId) => {
    try {
      const response = await axios.delete(`${API_URL}/posts/${postId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  },
};

export default postService;
