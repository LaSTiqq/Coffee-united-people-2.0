import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Ring } from "@uiball/loaders";
import axios from "axios";
import AuthForm from "../authForm/authForm";

const Register = ({ buttonLogin }) => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterInput = (e) => {
    setRegisterData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/register",
        registerData
      );
      if (response) {
        toast.success("Sign in now");
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("Email already taken, try again");
      } else {
        toast.error("An error occurred, try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center bg-image">
        <div className="col-md-4 square">
          <i className="fa-solid fa-address-card fa-3x d-flex justify-content-center mt-3"></i>
          <h2 className="text-center fw-bold">Register</h2>
          <AuthForm
            handleInput={handleRegisterInput}
            handleSubmit={handleRegister}
            buttonText="REGISTER"
          />
          {isLoading ? (
            <div className="text-center">
              <Ring />
            </div>
          ) : null}
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
