import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "33a61eebf1054940b96a7a1ce27b5d01",
  },
});
