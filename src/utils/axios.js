import axios from "axios";

// const API_URL = "https://irecruiter.herokuapp.com/api";
const API_URL = "http://localhost:5000/api";

const API = axios.create({
  baseURL: API_URL
});

API.defaults.headers.post["Content-Type"] = "application/json";
API.defaults.headers.post["Cache-Control"] = "no-cache";

export default API;
