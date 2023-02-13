import { Link } from "react-router-dom";
import "./main.css";

const Main = ({ buttonRegister, buttonLogin }) => {
  return (
    <div className="container-fluid">
      <div className="row bg-image">
        <div className="col-12">
          <h1 className="text-center fw-bold">The CUP Social Media App</h1>
          <h2 className="text-center fw-bold">
            For those who are addicted or just love coffee
          </h2>
          <h4 className="text-center fw-bold">
            Search for friends, chat, post memes and more
          </h4>
          <Link to={`/${buttonRegister}`}>
            <button className="btn btn-warning fw-bold d-block mx-auto my-3">
              Register
            </button>
          </Link>
          <p className="text-center text-white">
            Already have an account?&nbsp;
            <Link to={`/${buttonLogin}`} className="link-info fw-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
