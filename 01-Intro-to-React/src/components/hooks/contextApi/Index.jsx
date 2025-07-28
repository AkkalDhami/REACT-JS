import { createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const name = {
    name: "Akkal Dhami",
    role: "Developer",
  };
  return <UserContext.Provider value={name}>{children}</UserContext.Provider>;
};

// custom hook
const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUserContext };

export default UserContext;
