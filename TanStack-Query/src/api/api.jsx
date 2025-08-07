import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => api.get("/posts");

export const fetchPosts = async (pageNo) => {
  try {
    const res = await api.get(`/posts?_start=${pageNo * 3}&_limit=3`);
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

export const deletePost = async (id) => {
  try {
    const res = await api.delete(`/posts/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// infintie scrolling

export const fetchUsers = async ({ pageParam }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
