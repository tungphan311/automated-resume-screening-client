import axios from "axios";

const API_URL = "https://irecruiter.herokuapp.com/api";

const API = axios.create({
  baseURL: API_URL
});

API.defaults.headers.post["Content-Type"] = "application/json";

export default API;
