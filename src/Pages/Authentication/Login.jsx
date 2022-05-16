import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./Authentication.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { loginService } from "../../services/authServices";

const Login = () => {
  const { authDispatch } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();
    setUser(guestUser);
  };

  const loginHandler = (e) => {
    e.preventDefault();

    if (user.email === "" || user.password === "") {
      alert("email & password cannot be empty");
    } else {
      loginService(user, authDispatch, navigate,location);
    }
  };

  return (
    <main className="form-wrapper">
      <div className="form-login">
        <h3 className="form-title text-center x-lg-text">Login</h3>
        <form
          className="form-content md-text"
          onSubmit={(e) => loginHandler(e)}
        >
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tanay@neog.camp"
            value={user.email}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            placeholder="*********"
            name="password"
            value={user.password}
            onChange={(e) => onChangeHandler(e)}
          />

          <div className="user-control">
            <input type="checkbox" className="input-check" />
            <label>Remember Me ?</label>
            <a href="/login" className="forgot-pass">
              Forgot your Password{" "}
            </a>
          </div>
          <button
            className="btn-guest md-text"
            onClick={(e) => guestLoginHandler(e)}
          >
            Add Guest Credentials
          </button>
          <button className="btn btn-primary md-text">LOGIN</button>
          <p className="new-account text-center">
            <Link to="/signup">
              Create New Account
              <MdOutlineArrowForwardIos className="forward-icon" />
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export { Login };
