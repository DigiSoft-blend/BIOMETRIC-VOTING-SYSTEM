import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://sundaymba2-001-site1.atempurl.com/api",
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
});

export default apiClient;