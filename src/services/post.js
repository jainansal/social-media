import axios from "axios";

const getPost = async (id) => {
  const response = await axios.get(`post/${id}`);
  return response.data
}

const getAllPosts = async () => {
  const response = await axios.get('post/all');
  return response.data
}

const getTrendingPosts = async () => {
  const response = await axios.get('post/trending');
  return response.data
}

const getFriendsPosts = async () => {
  const response = await axios.get('post/friends');
  return response.data
}

const updateLikes = async (id) => {
  await axios.put(`post/likes/${id}`);
}

export default {
  updateLikes,
  getPost,
  getAllPosts,
  getTrendingPosts,
  getFriendsPosts
}
