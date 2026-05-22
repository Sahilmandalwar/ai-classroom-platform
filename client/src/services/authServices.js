import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:5000/v1/api/auth",
});

export const signUpUser = async (userData) => {
    const response = await API.post('/signup', userData);
    return response.data;
}

export const loginUser = async (userData) => {
    const response = await API.post('/login', userData);
    
    return response.data;
}