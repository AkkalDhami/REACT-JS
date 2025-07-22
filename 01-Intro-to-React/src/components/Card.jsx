import CardData from "../api/data.json";
import { ProfileData } from "./Profile";

const Card = () => {
  return (
    <>
      {CardData.map((card, index) => (
        <ProfileData
          card={card}
          key={index}
          greeting={
            <div className="greeting">
              <h3>Hello!, {card.name}</h3>
            </div>
          }>
          <div>
            <p>Here you can find your details and social links.</p>
          </div>
        </ProfileData>
      ))}
    </>
  );
};

export default Card;
