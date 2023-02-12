import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = ({ buttonHome }) => {
  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="container">
          <Link to={`/${buttonHome}`} className="navbar-brand text-white">
            <img src={logo} alt="Logo"></img>
            Coffee United People
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
