import { useEffect, useState } from "react";

const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState("");
  const timer = setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      day: "numeric",
      weekday: "long",
      month: "long",
      year: "numeric",
    });
    const formatedTime = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    setDateTime(`${formattedDate} - ${formatedTime}`);
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);
  return (
    <h2 className="text-lg text-zinc-300 font-medium">
      {dateTime ? dateTime : "Loading..."}
    </h2>
  );
};

export default TodoDateTime;
