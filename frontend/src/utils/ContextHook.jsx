import { createContext, useState } from "react";

export const LoggedInContext = createContext({
  isLoggedIn: false,
  setLoggedInStatus: (status) => {},
});

const LoggedInContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const setLoggedInStatus = (status) => {
    setLoggedIn(status);
    localStorage.setItem("isLoggedIn", status.toString());
  };
  const contextValue = { isLoggedIn: loggedIn, setLoggedInStatus };
  return (
    <LoggedInContext.Provider value={contextValue}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;
