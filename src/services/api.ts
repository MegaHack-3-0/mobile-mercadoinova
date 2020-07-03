import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mega-hack-3-time20.herokuapp.com/',
});

export default api;
