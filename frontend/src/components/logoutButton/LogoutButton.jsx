import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { logout } from "~/store/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/api/auth/logout");
      toast.success("Logout succeed! Redirecting...");
      setTimeout(() => {
        dispatch(logout());
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("An error occurred, try again");
    }
  };

  return (
    <>
      <Toaster />
      <a className="link-warning" onClick={handleLogout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        &nbsp; Log out
      </a>
    </>
  );
};

export default LogoutButton;
