import axios from "axios";

const getNews = async () => {
  const response = await axios.get('news');
  return response.data
}

export default {
  getNews
}
