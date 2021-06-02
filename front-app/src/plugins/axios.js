import axios from "axios";

let baseURL = `http://localhost:8000/api/`;

const instance = axios.create({
    baseURL: baseURL,
    timeout: 30000
});

export default instance;