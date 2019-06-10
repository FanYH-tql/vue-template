import HttpRequest from "@/lib/axios";
import { baseURL } from "@/config";
const axios = new HttpRequest(baseURL);
export default axios;
