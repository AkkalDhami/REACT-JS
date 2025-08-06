import { NavLink } from "react-router-dom";
import { fetchPosts } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const FetchRQ = () => {
  const [pageNo, setPageNo] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"], //useState
    queryFn: fetchPosts, //useEffect
    refetchOnWindowFocus: false,
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
        <button>Prev</button>
        <h2>Page {pageNo}</h2>
        <button>Next</button>
      </div>
    </div>
  );
};

export default FetchRQ;
