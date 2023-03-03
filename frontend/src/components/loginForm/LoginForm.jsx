import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { Alert } from "react-bootstrap";
import axios from "axios";

const LoginForm = ({ buttonRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [alertMessage, setAlertMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

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
        dispatch(login({ username: loginData.login }));
        setAlertMessage("Login succeed, redirecting...");
        setShowAlert(true);
        setTimeout(() => {
          navigate("/p/chat");
        }, 2000);
      }
    } catch (error) {
      if (error.request.status === 404) {
        setAlertMessage("Wrong login or password, please try again");
        setShowAlert(true);
      } else {
        setAlertMessage("An error occurred, please try again");
        setShowAlert(true);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center bg-image">
        <div className="col-md-4 square">
          <i className="fa-solid fa-key fa-3x d-flex justify-content-center mt-3"></i>
          <h2 className="text-center fw-bold">Sign in</h2>
          {showAlert && (
            <Alert
              className="fw-bold"
              variant={alertMessage.includes("please") ? "danger" : "success"}
              onClose={() => setShowAlert(false)}
              dismissible
            >
              {alertMessage}
            </Alert>
          )}
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
