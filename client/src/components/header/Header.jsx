import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "~/assets/logo.png";
import "./header.css";

const Header = ({ buttonHome }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const email = useSelector((state) => state.auth.email);

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
                Welcome, <span className="text-info">{email}</span>
              </h6>
              <span className="text-white fw-bold mx-3">|</span>
              <Link to="/p/profile" className="link-warning">
                <i className="fa-solid fa-rotate-left"></i>&nbsp; Get back
              </Link>
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
