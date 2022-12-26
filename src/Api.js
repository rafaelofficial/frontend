import axios from "axios";

const baseURL = 'http://localhost:8080/v1/account';

const api = axios.create({
	baseUrl: baseURL
});

export default api;