import axios from "axios";

const getBasicDetails = async (id) => {
  const response = await axios.get(`user/basic/${id}`);
  return response.data
}

const getUsersActivity = async () => {
  const response = await axios.get('user/activity');
  return response.data
}

const getProfile = async (id) => {
  const response = await axios.get(`user/${id}`);
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

const getRequestsReceived = async (id) => {
  const response = await axios.get('friends/received')
  return response.data
}

// const editProfile = async (data) => {
//   const response = await axios.put(`user/${auth.id}`, {
//     firstName: data.firstName,
//     lastName: data.lastName,
//     profileImg: data.profileImg
//   })
// }

const updateFollowing = async (id) => {
  const response = await axios.put(`user/following`, {
    newUser: id
  })
  return response.data
}

const addPost = async (data) => {
  const response = await axios.post(`post`, {
    content: data
  })
}

export default {
  getBasicDetails,
  getUsersActivity,
  getProfile,
  getUserPosts,
  getUserFriends,
  getRequestsReceived,
  // editProfile,
  updateFollowing,
  addPost
}
