import axios from "axios";

const getAllUsers = async () => {
  const response = await axios.get('user/all');
  return response.data;
}

const getBasicDetails = async (id) => {
  const response = await axios.get(`user/basic/${id}`);
  return response.data
}

const getUserPosts = async (id) => {
  const response = await axios.get(`post/${id}`);
  return response.data
}

const getUserFriends = async (id) => {
  const response = await axios.get(`user/friends/${id}`);
  return response.data
}

const getRequestsReceived = async () => {
  const response = await axios.get('friends/received')
  return response.data
}

const getRequestsSent = async () => {
  const response = await axios.get('friends/sent')
  return response.data
}

const addPost = async (data) => {
  await axios.post(`post`, {
    content: data
  })
}

const editDetails = async (data) => {
  await axios.put(`user/basic`, {
    ...data
  });
}

export default {
  getAllUsers,
  getBasicDetails,
  getUserPosts,
  getUserFriends,
  getRequestsReceived,
  getRequestsSent,
  addPost,
  editDetails
}
