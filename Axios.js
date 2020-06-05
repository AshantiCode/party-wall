import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://party-wall.herokuapp.com/items/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
