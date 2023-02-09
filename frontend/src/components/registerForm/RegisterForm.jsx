import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
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
      const request = await axios.post(
        "http://localhost:3001/register",
        registerData
      );
      if (request) {
        alert("Register succeed, sign in now");
        navigate("/login");
      } else {
        alert("Username already taken, press OK to try again");
      }
    } catch (error) {
      alert("An error occurred while registering, please try again later");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1 className="text-center mt-2 mb-4">Registering Form</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-2"
              onChange={handleLoginInput}
              placeholder="Login"
              type="text"
              name="login"
              required
            />
            <input
              className="form-control"
              onChange={handleLoginInput}
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="btn btn-dark mt-2">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
