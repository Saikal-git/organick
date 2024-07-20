import React, { createContext, useContext } from "react";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContext = ({ children }) => {
  let values = {};
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
