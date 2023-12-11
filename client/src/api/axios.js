// In a new file, e.g., src/api/axios.js
import axios from 'axios';

axios.interceptors.response.use(response => {
  return response;
}, error => {
  console.error('An error occurred:', error);
  return Promise.reject(error);
});

export default axios;

const instance = axios.create({
  baseURL: '/api',
  // You can add more default settings here
});

//export default instance;
