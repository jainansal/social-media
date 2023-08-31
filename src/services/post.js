import axios from "axios";

const getPost = async (id) => {
  const response = await axios.get(`post/${id}`);
  return response.data
}

export default {
  getPost
}
