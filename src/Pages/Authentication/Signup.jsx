import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Authentication.css";
import { useAuth } from "../../context";
import {Link,useNavigate } from "react-router-dom";
import { checkIfAllInputIsPresent } from "../../helper/auth-helper";
import { signupService } from "../../services/authServices";

const Signup = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",

  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const checkPassword = (confirmPass) => {
    if (userData.password === confirmPass) {
      setError("");
    
    } else {
      setError("Password and Confirm Password Doesn't Match");
    
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    if(!checkIfAllInputIsPresent(userData)){
        alert("All fields should be filled")
    }
    else{
        signupService(userData, authDispatch, navigate)
       
    }
   
  };
  return (
    <div>
      <main className="form-wrapper">
        <div className="form-login">
          <h2 className="form-title text-center x-lg-text">Signup</h2>
          <form
            className="form-content form-signup md-text"
            onSubmit={signupHandler}
          >
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
           
              name="firstName"
              value={userData.firstName}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
           
              name="lastName"
              value={userData.lastName}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="tanaypratap@neog.camp"
           
              name="email"
              value={userData.email}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="pass">Password</label>
            <span className="input-pass">
              <input
                type={showPassword ? "type" : "password"}
                id="pass"
                placeholder="*******"
             
                name="password"
                value={userData.password}
                onChange={(e) => onChangeHandler(e)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword((prevPass) => !prevPass)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </span>
            <label htmlFor="confirm-pass">Confirm Password:</label>
            <span className="input-pass">
              <input
                type={showConfirmPassword ? "type" : "password"}
                id="confirm-pass"
                placeholder="*******"
         
                name="confirmPass"
                value={userData.confirmPass}
                onChange={(e) => {
                    onChangeHandler(e)
                    checkPassword(e.target.value)
                }}
              />
              <span
                className="eye-icon"
                onClick={() =>
                  setShowConfirmPassword((prevConfirmPass) => !prevConfirmPass)
                }
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </span>
            <div className="passMatch-error">{error}</div>
            <div className="user-control">
              <input type="checkbox" className="input-check" />
              <label>I accept all Terms & Conditions</label>
            </div>
            <button className="btn btn-primary md-text" type="submit">
              CREATE NEW ACCOUNT
            </button>
            <p className="new-account text-center">
              <Link to="/login">
                Already have an account
                <MdOutlineArrowForwardIos className="forward-icon" />
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Signup };