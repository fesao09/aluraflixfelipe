import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001', // Certifique-se de que este é o endereço e a porta corretos do servidor
  // ...existing code...
});

export default api;
