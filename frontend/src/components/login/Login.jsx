import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { login } from "~/store/authSlice";
import AuthForm from "../authForm/authForm";

const Login = ({ buttonRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        loginData,
        { withCredentials: true }
      );
      if (response) {
        toast.success("Login succeed! Redirecting...");
        dispatch(login({ username: loginData.login }));
        setTimeout(() => {
          navigate("/p/chat");
        }, 2000);
      }
    } catch (error) {
      if (error.response.status === 404) {
        toast.error("Wrong login or password, try again");
      } else {
        toast.error("An error occurred, try again");
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center bg-image">
        <div className="col-md-4 square">
          <i className="fa-solid fa-key fa-3x d-flex justify-content-center mt-3"></i>
          <h2 className="text-center fw-bold">Sign in</h2>
          <Toaster />
          <AuthForm
            handleInput={handleLoginInput}
            handleSubmit={handleLoginSubmit}
            buttonText="LOGIN"
          />
          <p className="text-center text-dark fw-bold">
            Don't have an account?&nbsp;
            <Link to={`/${buttonRegister}`}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
