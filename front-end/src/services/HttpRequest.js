import axios from "axios";
import LocalStorage from "../utils/Localstorage";
class HttpRequest {
  async _sendRequest(method, url, data, extraHeaders, extraConfig) {
    try {
      const requestOption = {
        method,
        url,
        data,
        header: {
          Authorization: `Bearer ${LocalStorage.getAssessToken()}`,
          ...extraHeaders,
        },
        ...extraConfig,
      };
      const response = await axios(requestOption);

      return response;
    } catch (error) {
      return error.response.data;
    }
  }
  async get(url, data, extraHeaders, extraConfig) {
    return this._sendRequest("get", url, data, extraHeaders, extraConfig);
  }

  async post(url, data, extraHeaders, extraConfig) {
    return this._sendRequest("post", url, data, extraHeaders, extraConfig);
  }

  async delete(url, data, extraHeaders, extraConfig) {
    return this._sendRequest("delete", url, data, extraHeaders, extraConfig);
  }

  async put(url, data, extraHeaders, extraConfig) {
    return this._sendRequest("put", url, data, extraHeaders, extraConfig);
  }
}

export default new HttpRequest();
