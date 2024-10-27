import axios from "axios";
import { env } from "./env";

export const apiClient = axios.create({
  baseURL: env.API_ENDPOINT,
  withCredentials: false,
});

// apiClient.interceptors.response.use(
//   (res) => {
//     console.log("res", res);
//     return res.data?.data || res.data || res;
//   },
//   (error: any) => {
//     console.log(error?.response?.data || error?.response || error);
//     return Promise.reject(error?.response?.data || error?.response || error);
//   }
// );
