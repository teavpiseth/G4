import axios from "axios";
import HttpRequest from "./HttpRequest";
import LocalStorage from "../utils/Localstorage";

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    let config = error.config;
    if (
      error.response.status === 401 &&
      !error.config.url.endsWith("/login") &&
      !error.config.url.endsWith("/refresh-token") &&
      !config?._isRetry
    ) {
      config._isRetry = true;
      await HttpRequest.post("http://localhost:3033/api/refresh-token", {
        refreshToken: LocalStorage.getRefreshToken(),
      }).then((res) => {
        LocalStorage.setAssessToken(res.data.data.accessToken);
        LocalStorage.setRefreshToken(res.data.data.refreshToken);
      });

      config.headers.Authorization = `Bearer ${LocalStorage.getAssessToken()}`;
      const response = await axios(config);
      return response;
    }

    return Promise.reject(error);
  }
);
