import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../utils/ContextHook";
import Cookies from "js-cookie";
import "./chat.css";

const Chat = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const LoginContext = useContext(LoggedInContext);

  useEffect(() => {
    if (!LoginContext.isLoggedIn || !token) {
      navigate("/login");
    }
    return () => {};
  }, [LoginContext.isLoggedIn, token, navigate]);

  return (
    <div className="container-fluid bg-color">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">This is protected component</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
