import CardData from "../api/data.json";
console.log(CardData);
const Card = () => {
  return (
    <>
      {CardData.map((card, index) => {
        const { name, role, exp } = card;
        return (
          <div key={index} className="profile-card">
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
        );
      })}
    </>
  );
};

export default Card;
