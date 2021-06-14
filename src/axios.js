import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rookas-messenger-backend.herokuapp.com'
});

export default instance;