import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => api.get("/posts");

export const fetchPosts = async () => {
  try {
    const res = await api.get("/posts");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
