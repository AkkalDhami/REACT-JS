import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//? GET METHOD
export const getPosts = () => {
  return api.get("/posts");
};


//? DELETE METHOD
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

//? POST METHOD
export const createPost = (data) => {
  return api.post("/posts", data);
};

//? PUT METHOD
export const updatePost = (id, data) => {
  return api.put(`/posts/${id}`, data);
};