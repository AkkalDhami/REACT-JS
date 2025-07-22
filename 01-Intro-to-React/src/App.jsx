import "./App.css";

function App() {
  return (
    <>
      <Card name={"Akkal Dhami"} role={"Backend Developer"} exp={2} />
      <Card name={"John Doe"} role={"Frontend Developer"} exp={5} />
      <Card name={"Jane Smith"} role={"Full Stack Developer"} exp={8} />
    </>
  );
}

const Card = ({ name, role, exp }) => {
  return (
    <>
      <div className="profile-card">
        <div className="profile-image">
          <img src="https://i.pravatar.cc/150?img=32" alt="User" />
        </div>
        <h2>{name}</h2>
        <p>{role}</p>
        <p>Experience: {exp} years</p>
        <p>{exp > 5 ? "Senior Developer" : "Junior Developer"}</p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
