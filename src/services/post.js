import axios from "axios";

const getPost = async (id) => {
  const response = await axios.get(`post/${id}`);
  return response.data
}

const getAllPosts = async () => {
  const response = await axios.get('post');
  return response.data
}

export default {
  getPost,
  getAllPosts
}
