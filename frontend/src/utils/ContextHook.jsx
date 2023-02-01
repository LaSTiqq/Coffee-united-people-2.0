import { createContext, useState } from "react";

export const LoggedInContext = createContext({
  isLoggedIn: false,
  setLoggedInStatus: (status) => {},
});
const LoggedInContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const setLoggedInStatus = setLoggedIn;
  const contextValue = { isLoggedIn: loggedIn, setLoggedInStatus };
  return (
    <LoggedInContext.Provider value={contextValue}>
      <div>{props.children}</div>
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;
