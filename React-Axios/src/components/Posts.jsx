import React, { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/PostApi";
import PostCard from "./PostCard";
import Form from "./Form";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState({});
  const getPostsData = async () => {
    try {
      const res = await getPosts();
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newData = posts.filter((curPost) => curPost.id !== id);
        setPosts(newData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditPost = (post) => {
    console.log(post);
    setEditPost(post);
  };

  return (
    <section className="flex flex-col gap-3 justify-center w-full text-white">
      <Form
        data={posts}
        editPost={editPost}
        setEditPost={setEditPost}
        setData={setPosts}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            handleDeletePost={handleDeletePost}
            handleEditPost={handleEditPost}
          />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
