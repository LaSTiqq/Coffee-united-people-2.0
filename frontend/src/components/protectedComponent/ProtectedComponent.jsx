import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../utils/ContextHook";

const ProtectedComponent = () => {
  const navigate = useNavigate();
  const LoginContext = useContext(LoggedInContext);
  const handleClick = () => {
    LoginContext.setLoggedInStatus(false);
    navigate("/");
  };
  useEffect(() => {
    if (!LoginContext.isLoggedIn) {
      navigate("/login");
    }
  });
  return (
    <div className="container-fluid">
      <h1 className="text-center">This is protected component</h1>
      <button
        className="btn btn-dark d-block mx-auto mt-2"
        onClick={handleClick}
      >
        Log out
      </button>
    </div>
  );
};

export default ProtectedComponent;
