import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.jsonbin.io/b/5eda11af1f9e4e578817bf9c",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://deploy-preview-6--optimistic-payne-9d2d2a.netlify.app/",
  },
});
