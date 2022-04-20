import axios from "axios";

const base_uri = process.env.REACT_APP_URI;
const key = process.env.REACT_APP_KEY;

export const uri = axios.create({
  baseURL: `${base_uri}discover/movie?short_by=popularity.desc&api_key=${key}`,
});
