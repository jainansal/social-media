import axios from "axios";

const instance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Authorization': 'b44ad62df3f84022a61a49e777c5a628'
  }
});

const getNews = async (val) => {
  const response = await instance.get(`everything?pageSize=${val}`);
  console.log(response)
}

export default {
  getNews
}
