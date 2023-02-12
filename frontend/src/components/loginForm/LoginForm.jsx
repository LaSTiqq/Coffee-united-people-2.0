import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { LoggedInContext } from "../../utils/ContextHook";
import setAuthHeader from "../../utils/TokenVerify";
import Cookies from "js-cookie";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const LoginContext = useContext(LoggedInContext);

  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const request = await axios.post(
        "http://localhost:3001/api/auth/login",
        loginData,
        { withCredentials: true }
      );
      if (request) {
        LoginContext.setLoggedInStatus(true);
        const token = Cookies.get("token");
        setAuthHeader(token);
        alert("Login succeed, press OK to continue");
        navigate("/p/protected");
      } else {
        alert("Wrong login or password, press OK to try again");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred, press OK to try again");
    }
  };

  const handleLoginInput = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center background">
        <div className="col-md-4">
          <h1 className="text-center mt-2 mb-4">Signing in Form</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-2"
              onChange={handleLoginInput}
              type="text"
              name="login"
              placeholder="Login"
              required
            />
            <input
              className="form-control"
              onChange={handleLoginInput}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button
              className="btn btn-warning d-block mx-auto fw-bold mt-2"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
