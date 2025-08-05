import { fetchPosts } from "../api/api";
import { useQuery } from "@tanstack/react-query";

const FetchRQ = () => {
  const { data } = useQuery({
    queryKey: ["posts"], //useState
    queryFn: fetchPosts, //useEffect
  });

  console.log(data);

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchRQ;
