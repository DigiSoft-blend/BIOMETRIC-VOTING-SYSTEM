import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://votingapp-001-site1.dtempurl.com/api",
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
});

export default apiClient;