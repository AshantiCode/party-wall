import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://my-json-server.typicode.com/AshantiCode/server",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://deploy-preview-6--optimistic-payne-9d2d2a.netlify.app/",
  },
});
