// frontend/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts'; // Replace with your backend server URL

export const getAllPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const addPost = async (post) => {
  try {
    const response = await axios.post(API_URL, post);
    return response.data;
  } catch (error) {
    console.error('Error adding post:', error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${API_URL}/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
