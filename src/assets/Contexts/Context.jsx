import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const userObj = {
    name: "Asadullah",
  };

  return <AuthContext value={userObj}>{children}</AuthContext>;
  
};

export { AuthContext, AuthProvider };
