import React, { useEffect, useState } from "react";
import { createPost, updatePost } from "../api/PostApi";

const Form = ({ data, setData, editPost, setEditPost }) => {
  const [addPost, setAddPost] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(editPost).length === 0;
  useEffect(() => {
    if (editPost) {
      setAddPost({
        title: editPost.title || "",
        body: editPost.body || "",
      });
    }
  }, [editPost]);

  const handleInputChange = (e) => {
    setAddPost({
      ...addPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostData = async (addPost) => {
    try {
      const res = await createPost(addPost);

      if (res.status === 201) {
        setData([...data, res.data]);
        setAddPost({
          title: "",
          body: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updatePostData = async () => {
    try {
      const res = await updatePost(editPost.id, addPost);
      console.log(res);

      if (res.status === 200) {
        setData(
          data.map((post) => (post.id === editPost.id ? res.data : post))
        );
        setEditPost({});
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty) {
      addPostData(addPost);
    }

    if (!isEmpty) {
      updatePostData();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-3 max-w-xl"
        method="post">
        <input
          type="text"
          className="border border-zinc-400 px-3 py-2 outline-none focus:border-blue-500 "
          name="title"
          id="title"
          placeholder="Enter Title"
          value={addPost.title}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          className="border border-zinc-400 px-3 py-2 outline-none focus:border-blue-500"
          name="body"
          id="body"
          rows={4}
          value={addPost.body}
          onChange={handleInputChange}
          placeholder="Enter post"></textarea>
        <button
          type="submit"
          value={isEmpty ? "Add Post" : "Update"}
          className="bg-blue-500 cursor-pointer px-3 py-2">
          {isEmpty ? "Add Post" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default Form;
