import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "~/assets/logo.png";
import LogoutButton from "../logoutButton/LogoutButton";
import "./header.css";

const Header = ({ buttonHome }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.username);

  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="container">
          <Link to={`/${buttonHome}`} className="navbar-brand text-white">
            <img src={logo} alt="Logo" />
            Coffee United People
          </Link>
          {isLoggedIn ? (
            <>
              <h6 className="text-white fw-bold ms-auto">
                Welcome, <span className="text-info">{username}</span>
              </h6>
              <span className="text-white fw-bold mx-3">|</span>
              <Link to="/p/chat" className="link-warning">
                <i className="fa-solid fa-rotate-left"></i>&nbsp; Get back
              </Link>
              <span className="text-white fw-bold mx-3">|</span>
              <LogoutButton />
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
