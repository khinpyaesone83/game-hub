import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../hooks/useData";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "33a61eebf1054940b96a7a1ce27b5d01",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };
}
export default APIClient;
