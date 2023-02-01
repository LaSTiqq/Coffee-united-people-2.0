import { Link } from "react-router-dom";

const MainContent = ({ buttonRegister, buttonLogin }) => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-6">
          <Link to={`/${buttonRegister}`}>
            <button className="btn btn-dark d-block mx-auto">Register</button>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to={`/${buttonLogin}`}>
            <button className="btn btn-dark d-block mx-auto">Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
