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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.post(
        "http://localhost:3001/register",
        registerData
      );
      if (request) {
        alert("Register succeed, sign in now");
        navigate("/login");
      }
    } catch (error) {
      alert("Username already taken, press OK to try again");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 text-center">
          <h1 className="mt-2 mb-4 text-center">Registering Form</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="login"
              className="form-control mb-2"
              required
              onChange={handleLoginInput}
              placeholder="Login"
            />
            <input
              type="password"
              name="password"
              className="form-control"
              required
              onChange={handleLoginInput}
              placeholder="Password"
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
