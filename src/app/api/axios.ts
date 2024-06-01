import axios from 'axios';

const BASE_URL = 'https://sp-taskify-api.vercel.app/5-9/';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export default instance;
