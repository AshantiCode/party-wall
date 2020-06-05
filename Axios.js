import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.jsonbin.io/b/5eda0eb01f9e4e578817bec0",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
