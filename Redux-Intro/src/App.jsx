import React from "react";
import store from "./store";
import Todo from "./components/Todo";

const App = () => {
  console.log(store);
  return <Todo />;
};

export default App;
