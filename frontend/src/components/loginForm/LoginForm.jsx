import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { LoggedInContext } from "../../utils/ContextHook";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const LoginContext = useContext(LoggedInContext);

  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.post(
        "http://localhost:3001/login",
        loginData
      );
      if (request) {
        LoginContext.setLoggedInStatus(true);
        alert("Login succeed, press OK to continue");
        navigate("/protected");
      }
    } catch (error) {
      alert("Wrong login or password, press OK to try again");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 text-center">
          <h1 className="text-center mt-2 mb-4">Signing in Form</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-2"
              required
              onChange={handleLoginInput}
              name="login"
              type="login"
              placeholder="Login"
            />
            <input
              className="form-control"
              required
              onChange={handleLoginInput}
              name="password"
              type="password"
              placeholder="Password"
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
