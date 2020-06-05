import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://my-json-server.typicode.com/AshantiCode/server",
  headers: { "Content-Type": "x-www-form-urlencoded", crossdomain: "true" },
});
