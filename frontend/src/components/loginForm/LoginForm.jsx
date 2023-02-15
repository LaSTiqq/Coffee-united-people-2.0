import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { LoggedInContext } from "../../utils/ContextHook";
import setAuthHeader from "../../utils/TokenVerify";
import Cookies from "js-cookie";
import axios from "axios";

const LoginForm = ({ buttonRegister }) => {
  const navigate = useNavigate();
  const LoginContext = useContext(LoggedInContext);

  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  useEffect(() => {
    if (LoginContext.isLoggedIn) {
      navigate("/p/chat");
    }
  }, [LoginContext.isLoggedIn, navigate]);

  const handleLoginInput = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const request = await axios.post(
        "http://localhost:3001/api/auth/login",
        loginData,
        { withCredentials: true }
      );
      if (request) {
        const requestData = JSON.parse(request.config.data);
        const username = requestData.login;
        LoginContext.setLoggedInStatus(true, username);
        const token = Cookies.get("token");
        setAuthHeader(token);
        alert("Login succeed, press OK to continue");
        navigate("/p/chat");
      } else {
        alert("Wrong login or password, press OK to try again");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred, press OK to try again");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center bg-image">
        <div className="col-md-4 square">
          <i className="fa-solid fa-arrow-right-to-bracket fa-3x d-flex justify-content-center mt-3"></i>
          <h2 className="text-center fw-bold">Sign in</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control my-2"
              onChange={handleLoginInput}
              placeholder="Username"
              type="text"
              name="login"
              required
            />
            <input
              className="form-control mb-2"
              onChange={handleLoginInput}
              placeholder="Password"
              type="password"
              name="password"
              required
            />
            <button
              className="btn btn-warning d-block mx-auto fw-bold my-2"
              type="submit"
            >
              SIGN IN
            </button>
          </form>
          <p className="text-center text-dark fw-bold">
            Don't have an account?&nbsp;
            <Link to={`/${buttonRegister}`} className="link-primary fw-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
