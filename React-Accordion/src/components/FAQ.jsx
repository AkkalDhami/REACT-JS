const FAQ = ({ question, answer, isActive, handleButton }) => {
  return (
    <li>
      <div className="mb-4">
        <div
          onClick={handleButton}
          className="flex justify-between cursor-pointer bg-green-100 p-3">
          <p className="text-lg text-black font-semibold">{question}</p>
          <button
            onClick={handleButton}
            className="text-lg text-black font-medium  bg-green-300 px-3 py-1.5 rounded-lg cursor-pointer flex items-center justify-center">
            {isActive ? "-" : "+"}
          </button>
        </div>
        <p className={isActive ? "p-3 bg-green-50" : "hidden"}>
          {isActive && answer}
        </p>
      </div>
    </li>
  );
};

export default FAQ;
