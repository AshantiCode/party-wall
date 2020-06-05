import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://extendsclass.com/api/json-storage/bin/dcdafab",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
