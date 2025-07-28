import { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const name = {
    name: "Akkal Dhami",
    role: "Developer",
  };
  return <UserContext.Provider value={name}>{children}</UserContext.Provider>;
};

export { UserProvider };

export default UserContext;
