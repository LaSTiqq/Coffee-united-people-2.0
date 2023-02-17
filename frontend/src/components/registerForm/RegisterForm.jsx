import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import axios from "axios";
import "./registerForm.css";

const RegisterForm = ({ buttonLogin }) => {
  const navigate = useNavigate();

  const [alertMessage, setAlertMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const [registerData, setRegisterData] = useState({
    login: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    setRegisterData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const request = await axios.post(
        "http://localhost:3001/api/register",
        registerData
      );
      if (request) {
        setAlertMessage("Register succeed, redirecting...");
        setShowAlert(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      if (error.request.status === 400) {
        setAlertMessage("Username already taken, please try again");
        setShowAlert(true);
      } else {
        setAlertMessage(
          "An error occurred while registering, please try again"
        );
        setShowAlert(true);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center bg-image">
        <div className="col-md-4 square">
          <i className="fa-solid fa-address-card fa-3x d-flex justify-content-center mt-3"></i>
          <h2 className="text-center fw-bold">Register</h2>
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
              type="submit"
              className="btn btn-warning d-block mx-auto fw-bold my-2"
            >
              REGISTER
            </button>
          </form>
          <p className="text-center text-dark fw-bold">
            Already have an account?&nbsp;
            <Link to={`/${buttonLogin}`} className="link-primary fw-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
