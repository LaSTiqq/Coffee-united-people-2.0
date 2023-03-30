import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = Cookies.get("token");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (!token) {
      navigate("/login");
    }
  }, [isLoggedIn, token, navigate]);

  if (!isLoggedIn || !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
