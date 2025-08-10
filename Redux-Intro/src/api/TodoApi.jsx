import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getTodos = () => {
  return api.get("/todos?_limit=5");
};
``