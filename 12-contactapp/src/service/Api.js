import axios from "axios";
import { API_ENDPOINT } from "../lib/contant";

export const api = axios.create({
  baseURL: API_ENDPOINT,
});
