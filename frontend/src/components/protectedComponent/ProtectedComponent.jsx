import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../utils/ContextHook";
import Cookies from "js-cookie";
import setAuthHeader from "../../utils/TokenVerify";
import axios from "axios";

const ProtectedComponent = () => {
  const navigate = useNavigate();
  const LoginContext = useContext(LoggedInContext);
  const token = Cookies.get("token");
  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:3001/api/auth/logout");
      document.cookie =
        "token=; expires=Saturday, January 10, 1970 at 00:00:00 AM; path=/;";
      setAuthHeader(null);
      LoginContext.setLoggedInStatus(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("An error occurred, press OK to try again");
    }
  };

  useEffect(() => {
    if (!LoginContext.isLoggedIn || !token) {
      navigate("/");
    }
    return () => {};
  }, [LoginContext.isLoggedIn, token, navigate]);

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
