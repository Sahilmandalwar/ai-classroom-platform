import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:5000/v1/api",
});

export default api;