import axios from "./index";
export const getUserInfo = () => {
  return axios.request({
    url: "/getName",
    method: "get"
  });
};
