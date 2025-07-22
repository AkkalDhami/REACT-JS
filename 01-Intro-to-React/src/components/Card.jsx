import CardData from "../api/data.json";
import { ProfileData } from "./Profile";

const Card = () => {
  return (
    <>
      {CardData.map((card, index) => (
        <ProfileData card={card} key={index} />
      ))}
    </>
  );
};

export default Card;
