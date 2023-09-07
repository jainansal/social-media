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

const toggleLike = async (id) => {
  await axios.put(`post/likecomment/${id}`);
}

export default {
  toggleLike,
  getPost,
  getAllPosts,
  getTrendingPosts,
  getFriendsPosts
}
