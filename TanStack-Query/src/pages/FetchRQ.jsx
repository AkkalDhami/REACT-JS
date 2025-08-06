import { NavLink } from "react-router-dom";
import { fetchPosts } from "../api/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const FetchRQ = () => {
  const [pageNo, setPageNo] = useState(0);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNo], //useState
    queryFn: () => fetchPosts(pageNo), //useEffect
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    // staleTime: 5000,
    // refetchInterval: 5000,
    // refetchIntervalInBackground: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="pagination-section container">
        <button onClick={() => setPageNo((prev) => Math.max(0, prev - 1))}>
          Prev
        </button>
        <h2>Page {pageNo + 1}</h2>
        <button onClick={() => setPageNo((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default FetchRQ;
