import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Ring } from "@uiball/loaders";
import axios from "axios";
import { login } from "~/store/authSlice";
import AuthForm from "../authForm/authForm";

const Login = ({ buttonRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginInput = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/login",
        loginData,
        { withCredentials: true, timeout: 1000 }
      );
      if (response) {
        toast.success("Signed in");
        dispatch(login({ email: loginData.email }));
        navigate("/p/profile");
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        toast.error("Request timed out, try again");
      } else if (error.response && error.response.status === 404) {
        toast.error("Wrong email or password, try again");
      } else if (error.response) {
        toast.error("An error occurred, try again");
      } else if (error.request) {
        toast.error("Network error, try again");
      } else {
        toast.error("An unexpected error occurred, try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center bg-image">
        <div className="col-md-4 square">
          <i className="fa-solid fa-key fa-3x d-flex justify-content-center mt-3"></i>
          <h2 className="text-center fw-bold">Sign in</h2>
          <AuthForm
            handleInput={handleLoginInput}
            handleSubmit={handleLogin}
            buttonText="LOGIN"
          />
          {isLoading ? (
            <div className="text-center">
              <Ring />
            </div>
          ) : null}
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
