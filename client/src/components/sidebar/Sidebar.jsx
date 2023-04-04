import { Link } from "react-router-dom";
import LogoutButton from "../logoutButton/LogoutButton";
import "./sidebar.css";

const Sidebar = ({ buttonProfile, buttonChat }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <div className="sidebar">
            <ul className="list-unstyled px-3">
              <li>
                <Link to={`/${buttonProfile}`} className="rectangle fw-bold">
                  Profile
                </Link>
              </li>
              <li>
                <Link to={`/${buttonChat}`} className="rectangle fw-bold">
                  Chat
                </Link>
              </li>
              <hr />
              <LogoutButton />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
