import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import AuthForm from "../authForm/authForm";

const Register = ({ buttonLogin }) => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  const handleRegisterInput = (e) => {
    setRegisterData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/register",
        registerData
      );
      if (response) {
        toast.success("Register succeed! Redirecting...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("Email already taken, try again");
      } else {
        toast.error("An error occurred, try again");
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center bg-image">
        <div className="col-md-4 square">
          <i className="fa-solid fa-address-card fa-3x d-flex justify-content-center mt-3"></i>
          <h2 className="text-center fw-bold">Register</h2>
          <Toaster />
          <AuthForm
            handleInput={handleRegisterInput}
            handleSubmit={handleRegisterSubmit}
            buttonText="REGISTER"
          />
          <p className="text-center text-dark fw-bold">
            Already have an account?&nbsp;
            <Link to={`/${buttonLogin}`}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
