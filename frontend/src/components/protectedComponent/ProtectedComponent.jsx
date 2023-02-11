import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../utils/ContextHook";
import axios from "axios";

const ProtectedComponent = () => {
  const navigate = useNavigate();
  const LoginContext = useContext(LoggedInContext);
  const handleLogout = async () => {
    await axios.delete("http://localhost:3001/logout");
    document.cookie =
      "token=; expires=Saturday, January 10, 1970 at 00:00:00 AM; path=/;";
    LoginContext.setLoggedInStatus(false);
    navigate("/");
  };

  useEffect(() => {
    if (!LoginContext.isLoggedIn) {
      navigate("/");
    }
    return () => {};
  });

  return (
    <div className="container-fluid">
      <h1 className="text-center">This is protected component</h1>
      <button
        className="btn btn-dark d-block mx-auto mt-2"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default ProtectedComponent;
