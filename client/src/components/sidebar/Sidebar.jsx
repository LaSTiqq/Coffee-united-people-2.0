import { Link } from "react-router-dom";
import LogoutButton from "../logoutButton/LogoutButton";
import "./sidebar.css";

const Sidebar = ({ buttonProfile, buttonChat }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="list-unstyled px-3">
          <Link
            to={`/${buttonProfile}`}
            className="rectangle text-white d-flex align-items-center ps-2"
          >
            <li className="fw-bold">
              <i className="fa-regular fa-user"></i>
              &nbsp;&nbsp;Profile
            </li>
          </Link>
          <Link
            to={`/${buttonChat}`}
            className="rectangle text-white d-flex align-items-center ps-2"
          >
            <li className="fw-bold">
              <i className="fa-regular fa-comment"></i>
              &nbsp;&nbsp;Chat
            </li>
          </Link>
          <hr />
          <LogoutButton />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
