import axios from "axios";
class HttpRequest {
  constructor(baseURL = baseURL) {
    this.baseURL = baseURL;
    this.queue = [];
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {}
    };
    return config;
  }
  interceptor(instance) {
    instance.interceptors.request.use(
      config => {
        // 可以添加全局loading
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    instance.interceptors.response.use(
      res => {
        const { data, status } = res;
        return { data, status };
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    options = Object.assign(this.getInsideConfig(), options);
    const instance = axios.create();
    this.interceptor(instance);
    return instance(options);
  }
}
export default HttpRequest;
