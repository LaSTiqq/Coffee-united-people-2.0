import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { LoggedInContext } from "../../utils/ContextHook";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const LoginContext = useContext(LoggedInContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const request = await axios.post(
        "http://localhost:3001/login",
        loginData,
        { withCredentials: true }
      );
      if (request) {
        LoginContext.setLoggedInStatus(true);
        alert("Login succeed, press OK to continue");
        navigate("/protected");
      } else {
        alert("Wrong login or password, press OK to try again");
      }
    } catch (error) {
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
      <div className="row justify-content-center">
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
            <button className="btn btn-dark mt-2" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
