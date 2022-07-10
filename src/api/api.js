import axios from "axios";

export default {
    registerUser: function (userData) {
        return axios.post("http://localhost:5001/v1/auth/register", userData);
    },
    loginUser: function (userData) {
        return axios.post("http://localhost:5001/v1/auth/login", userData);
    },
}

axios.defaults.baseURL = 'http://localhost:5001'

export const getUsersAPI = async () => axios.get('/v1/users')

export const getUserByIdAPI = async (id) => axios.get(`/v1/users${id}`)

export const createUserAPI = async (user) => axios.post(`/v1/users`, user)

export const updateUserAPI = async (user) => axios.put(`/v1/users/${user.id}`, user)

export const deleteUserByIdAPI = async (id) => axios.delete(`/v1/users/${id}`)