import { useContext } from "react";
import UserContext from "./Index";

const Home = () => {
  const  name  = useContext(UserContext);
  return (
    <div>
          <h1>Hello </h1>
          <h2>{name.name}</h2>
          <p>Iam a {name.role}</p>
    </div>
  );
};

export default Home;
