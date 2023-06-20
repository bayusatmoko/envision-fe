import axios from "axios";
import { getTokenApi } from "./auth";

axios.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        const access_token = await getTokenApi();
  
        localStorage.setItem('token', access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
        return axios(originalRequest);
      }
      return Promise.reject(error);
    }
);

export default axios