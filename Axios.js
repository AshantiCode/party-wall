import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.npoint.io/bc86cff86119e2c35451",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
