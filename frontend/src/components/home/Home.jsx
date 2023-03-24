import { Link } from "react-router-dom";
import AuthButton from "../authButton/AuthButton";
import "./home.css";

const Home = ({ buttonRegister, buttonLogin }) => {
  return (
    <div className="container-fluid">
      <div className="row bg-image">
        <div className="col-12 text-center fw-bold">
          <h1>The CUP Social Media App</h1>
          <h2>For those who are addicted or just love coffee</h2>
          <h4>Search for friends, chat, post memes and more</h4>
          <Link to={`/${buttonRegister}`}>
            <AuthButton text="Register" className={"my-3"} />
          </Link>
          <p className="text-white">
            Already have an account?&nbsp;
            <Link to={`/${buttonLogin}`} className="link-info">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
