import { HiOutlineMenu, HiOutlineUser } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";
import { useAuth, useSideNav } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({ searchData, setSearchData }) => {
  const { setSideNavDisplay } = useSideNav();
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const token = authState.token || localStorage.getItem("token");

  const logOutHandler = () => {
    navigate("/signout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    authDispatch({ type: "LOGOUT" });
    toast.success("You are successfully Logged out!!");
  };
  return (
    <nav className="nav-wrapper flex-container">
      <section className="nav-left flex-container">
        <HiOutlineMenu
          className="menu-bar lg-text"
          onClick={() => setSideNavDisplay((sideNavDisplay) => !sideNavDisplay)}
        />
        <img
          src="../assets/logo.png"
          className="logo-img"
          alt="logo-name"
          onClick={() => navigate("/")}
        />
      </section>
      {location.pathname === "/" || location.pathname === "/explore" ? ( <section className="nav-middle">
        <input
          type="search"
          placeholder="Search for Videos"
          className="input-search"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
      
          <button type="submit" className="btn-search">
            <BsSearch />
          </button>
      
      </section>) : null }
     
      {token ? (
        <section className="nav-right flex-container" onClick={logOutHandler}>
          <AiOutlineLogout className="user-icon lg-text" />
          <p className="user-logout md-text">Logout</p>
        </section>
      ) : (
        <section
          className="nav-right flex-container"
          onClick={() => navigate("/login")}
        >
          <HiOutlineUser className="user-icon lg-text" />
          <p className="user-login md-text">Login</p>
        </section>
      )}
    </nav>
  );
};
export { Navbar };
