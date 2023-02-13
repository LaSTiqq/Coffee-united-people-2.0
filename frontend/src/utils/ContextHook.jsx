import { createContext, useState } from "react";

export const LoggedInContext = createContext({
  isLoggedIn: false,
  login: "",
  setLoggedInStatus: (status, login) => {},
});

const LoggedInContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [login, setUsername] = useState(localStorage.getItem("login"));
  const setLoggedInStatus = (status, login) => {
    setLoggedIn(status);
    setUsername(login);
    localStorage.setItem("isLoggedIn", status.toString());
    localStorage.setItem("login", login);
  };
  const contextValue = { isLoggedIn: loggedIn, login, setLoggedInStatus };
  return (
    <LoggedInContext.Provider value={contextValue}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;
