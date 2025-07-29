import { useUserContext } from "./Index";

const About = () => {
  let name;
  const isValid = true;
  if (isValid) {
    name = useUserContext();
  }
  return (
    <div>
      <h1>Hello From About Page,</h1>
      <h2>{name.name}</h2>
      <p>Iam a {name.role}</p>
      <p>I am a {name.role > 5 ? "Senior Developer" : "Junior Developer"}</p>
    </div>
  );
};

export default About;
