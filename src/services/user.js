import axios from "axios";
import { useAuthStore } from "@/stores/auth"

const auth = useAuthStore();

const getProfile = async (id) => {
  const response = await axios.get(`user/${id}`);
  return response.data
}

const editProfile = async (data) => {
  const response = await axios.put(`user/${auth.userId}`, {
    firstName: data.firstName,
    lastName: data.lastName,
    profileImg: data.profileImg
  })
}

const addPost = async (data) => {
  const response = await axios.post(`post`, {
    content: data
  })
}

export default {
  getProfile,
  editProfile,
  addPost
}
