import React, { useEffect, useState } from "react";

import faq from "../api/faq.json";
import FAQ from "./FAQ";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [isActive, setActive] = useState(false);

  const handleToggle = (id) => {
    // setActive(id);
    setActive((prevId) => (prevId === id ? false : id));
  };

  useEffect(() => {
    setData(faq);
  }, []);

  return (
    <div className="flex justify-center max-w-4xl flex-col w-full item-center min-h-screen p-8">
      <h1 className="text-4xl">React Accordion</h1>
      <ul className="mt-4">
        {data.map((item) => (
          <FAQ
            key={item.id}
            question={item.question}
            answer={item.answer}
            isActive={item.id === isActive}
            handleButton={() => handleToggle(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
