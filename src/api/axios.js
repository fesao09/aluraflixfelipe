import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001', // Ensure this is the correct server address and port
  // ...existing code...
});

export default api;
