import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { logout } from "~/store/authSlice";
import "./logoutButton.css";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/api/auth/logout");
      toast.success("Loggged out");
      dispatch(logout());
    } catch (error) {
      toast.error("An error occurred, try again");
    }
  };

  return (
    <>
      <a className="link-warning logout" onClick={handleLogout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        &nbsp; Log out
      </a>
    </>
  );
};

export default LogoutButton;
