import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Register = ({ buttonLogin }) => {
  const navigate = useNavigate();

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
        toast.error("Username already taken, try again");
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

export default Register;
