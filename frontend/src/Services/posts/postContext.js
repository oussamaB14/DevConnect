// postContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import postService from "./postService";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch posts
  const fetchPosts = async () => {
    console.log("fetchPosts called");
    setLoading(true);
    setError(null);
    try {
      const data = await postService.getPosts();
      console.log("fetchPosts data:", data);
      setPosts(data);
    } catch (err) {
      console.error("fetchPosts error:", err);
      setError(err);
    } finally {
      console.log("fetchPosts finished");
      setLoading(false);
    }
  };

  // Function to create a new post
  const createPost = async (postData) => {
    setLoading(true);
    setError(null);
    try {
      const newPost = await postService.createPost(postData);
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      console.log("New post added:", newPost); // Log the newly added post
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    console.log("useEffect called");
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, loading, error, createPost, fetchPosts }}
    >
      {children}
    </PostContext.Provider>
  );
};

// Custom hook to use the PostContext
export const usePost = () => {
  return useContext(PostContext);
};
