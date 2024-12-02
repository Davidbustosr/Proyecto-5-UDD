import axios from 'axios';

// Configuración del cliente Axios
const apiClient = axios.create({
  baseURL: 'https://api.mercadopublico.cl/servicios/v1/publico/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;