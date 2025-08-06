import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchIndPost } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

const FetchRQDetails = () => {
  const { postid } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", postid],
    queryFn: () => fetchIndPost(postid),
  });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}
      {data && (
        <div className="section-accordion">
          <p>ID: {data.id}</p>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </div>
      )}
      <NavLink to="/rq">
        <button>Back</button>
      </NavLink>
    </div>
  );
};

export default FetchRQDetails;
