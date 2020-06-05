import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.jsonbin.io/b/5eda2aa1655d87580c444dd6",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
