import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import logo from "~/assets/logo.png";
import { logout } from "~/store/authSlice";
import "./header.css";

const Header = ({ buttonHome }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.username);

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await axios.delete("http://localhost:3001/api/auth/logout"),
        { withCredentials: true };
      toast.success("Logout succeed! Redirecting...");
      document.cookie =
        "token=; expires=Saturday, January 10, 1970 at 00:00:00 AM; path=/;";
      setTimeout(() => {
        dispatch(logout());
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("An error occurred, try again");
    }
  };

  return (
    <header>
      <Toaster />
      <nav className="navbar fixed-top">
        <div className="container">
          <Link to={`/${buttonHome}`} className="navbar-brand text-white">
            <img src={logo} alt="Logo" />
            Coffee United People
          </Link>
          {isLoggedIn && username ? (
            <>
              <h6 className="text-white fw-bold ms-auto">
                Welcome, <span className="text-info">{username}</span>
              </h6>
              <span className="text-white fw-bold mx-3">|</span>
              <Link to="/p/chat" className="link-warning">
                <i className="fa-solid fa-rotate-left"></i>&nbsp; Get back
              </Link>
              <span className="text-white fw-bold mx-3">|</span>
              <a className="link-warning" onClick={handleLogout}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                &nbsp; Log out
              </a>
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
