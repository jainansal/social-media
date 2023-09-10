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

const getComments = async (id) => {
  const response = await axios.get(`post/comments/${id}`);
  return response.data
}

const addComment = async (id, data) => {
  await axios.post(`post/comments/${id}`, {
    content: data
  })
}

export default {
  updateLikes,
  getPost,
  getAllPosts,
  getTrendingPosts,
  getFriendsPosts,
  getComments,
  addComment
}
