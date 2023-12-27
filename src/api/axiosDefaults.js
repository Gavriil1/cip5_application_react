import axios from "axios";

axios.defaults.baseURL = "https://ci-p5-project-api-part-500c148fe358.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();