import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.jsonbin.io/b/5eda29f92f5fd957fda448c6",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
