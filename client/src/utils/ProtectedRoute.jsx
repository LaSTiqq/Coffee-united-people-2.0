import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { checkToken } from "~/store/authSlice";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = Cookies.get("token");

  useEffect(() => {
    dispatch(checkToken());
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [token, isLoggedIn, dispatch]);

  return children;
};

export default ProtectedRoute;
