import axios from "axios";

 // The distinct URL associated with the API project deployed on Render.
axios.defaults.baseURL = "https://ci-p5-project-api-part-500c148fe358.herokuapp.com/";
// Anticipated data structure required by the API
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// Prevent Cross-Origin Resource Sharing (CORS) issues when transmitting cookies.
axios.defaults.withCredentials = true;

// Refreshing access tokens
export const axiosReq = axios.create();
export const axiosRes = axios.create();