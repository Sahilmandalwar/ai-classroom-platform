import API from "./api";

export const signUpUser = async (userData) => {
    const response = await API.post('/auth/signup', userData);
    return response.data;
}

export const loginUser = async (userData) => {
    const response = await API.post('/auth/login', userData)
    return response.data;
}

export const getCurrentUser = async () => {
    const response = await API.get("/auth/me");
    return response.data;
}