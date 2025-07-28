import { useContext } from "react";
import UserContext from "./Index";

const Service = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <h1>Hello From Service Page,</h1>
      <h2>{name.name}</h2>
      <p>Iam a {name.role}</p>
    </div>
  );
};

export default Service;
