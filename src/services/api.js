import axios from 'axios';

// 15905050/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;