import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.jsonbin.io/s/5eda10ea1f9e4e578817bf5d",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://deploy-preview-6--optimistic-payne-9d2d2a.netlify.app/",
  },
});
