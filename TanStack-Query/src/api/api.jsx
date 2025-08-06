import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => api.get("/posts");

export const fetchPosts = async () => {
  try {
    const res = await api.get("/posts?_start=0&_limit=3");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchIndPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
