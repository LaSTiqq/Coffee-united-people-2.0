import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import axios from "axios";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = ({ buttonHome }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.username);

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:3001/api/auth/logout"),
        { withCredentials: true };
      document.cookie =
        "token=; expires=Saturday, January 10, 1970 at 00:00:00 AM; path=/;";
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("An error occurred, press OK to try again");
    }
  };

  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="container">
          <Link to={`/${buttonHome}`} className="navbar-brand text-white">
            <img src={logo} alt="Logo"></img>
            Coffee United People
          </Link>
          {isLoggedIn && username ? (
            <>
              <h6 className="text-white ms-auto">
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
