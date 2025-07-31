import React from "react";

const PostCard = ({ post, handleDeletePost, handleEditPost }) => {
  const { title, body, id } = post;

  return (
    <div className="bg-white dark:bg-zinc-800 shadow-lg border-l-4 border-blue-500 p-4">
      <p> {id}.</p>
      <h1 className="text-lg my-2 font-semibold">TITLE: {title}</h1>
      <p className="text-base italic">POST: {body}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => handleEditPost(post)}
          className="bg-blue-500 cursor-pointer px-3 py-2 rounded-lg">
          Edit
        </button>
        <button
          onClick={() => handleDeletePost(id)}
          className="bg-red-500 cursor-pointer px-3 py-2 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
