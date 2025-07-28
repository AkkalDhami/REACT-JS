import { useUserContext } from "./Index";
const Home = () => {
  const name = useUserContext();
  return (
    <div>
      <h1>Hello From Home Page,</h1>
      <h2>{name.name}</h2>
      <p>Iam a {name.role}</p>
    </div>
  );
};

export default Home;
