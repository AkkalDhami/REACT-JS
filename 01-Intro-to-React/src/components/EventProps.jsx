import React from "react";

const EventProps = () => {
  const handleWelcomeUser = (name) => {
    alert(`Welcome ${name}`);
  };
  const handleHover = () => {
    alert("Mouse Hovered");
  };
  return (
    <div>
      <WelcomeUser
        onBtnClick={() => handleWelcomeUser("Akkal Dhami")}
        onMouseEnter={handleHover}
      />
    </div>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = (name) => {
    alert(`Welcome ${name}`);
    props.onBtnClick();
  };
  return (
    <div className="flex gap-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={props.onBtnClick}
        onMouseEnter={props.onMouseEnter}>
        Welcome User
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleGreeting("Aarav Sharma")}>
        Welcome User 2
      </button>
    </div>
  );
};

export default EventProps;
