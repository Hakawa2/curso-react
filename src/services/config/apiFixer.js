import axios from "axios";

const http = axios.create({
  baseURL:
    "http://data.fixer.io/api/latest?access_key=2068d39b9994329077201b394087fd79",
});

http.interceptors.response.use(
  function (response) {
    const { data } = response;
    return Promise.resolve(data);
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

export { http };
