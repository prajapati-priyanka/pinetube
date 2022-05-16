import { FaCheck } from "react-icons/fa";
import "./Authentication.css";
import { Link } from "react-router-dom";

const Signout = () => {
  return (
    <main className="form-wrapper">
      <div className="form-login form-signout">
        <span className="check-btn x-lg-text">
          <FaCheck />
        </span>

        <div className="signout-msg lg-text text-center">
          You have succesfully logged out !!
        </div>
        <Link to="/">
          <div className="text-center md-text">Back to Home</div>
        </Link>
      </div>
    </main>
  );
};

export { Signout };
