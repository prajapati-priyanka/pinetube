import { HiOutlineMenu,HiOutlineUser } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { BsSearch  } from "react-icons/bs";
import "./Navbar.css"
import { useAuth, useSideNav } from "../../context";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () =>{

  const {setSideNavShrinked} = useSideNav();
  const {authState, authDispatch} = useAuth()
  const navigate = useNavigate();
 const token = authState.token || localStorage.getItem("token");

 const logOutHandler = () => {
  navigate("/signout");
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  authDispatch({ type: "LOGOUT" });
  toast.success("You are successfully Logged out!!")
};
    return(
        <nav className="nav-wrapper flex-container">
        <section className="nav-left flex-container">
          <HiOutlineMenu className="menu-bar lg-text" onClick={()=> setSideNavShrinked(sideNavShrinked => !sideNavShrinked)}/>
          <img src="../assets/logo.png" className="logo-img" alt="" />
         
        </section>
        <section className="nav-middle">
        <input
            type="search"
            placeholder="Search Product"
            className="input-search"
          />
          <button type="submit" className="btn-search">
            <BsSearch />
          </button>
        </section>
        {token ? ( <section className="nav-right flex-container" onClick={logOutHandler}>
            <AiOutlineLogout className="user-icon lg-text"/>
           <p className="user-logout md-text">Logout</p>
        </section>) : (  <section className="nav-right flex-container" onClick={()=>navigate("/login")}>
            <HiOutlineUser className="user-icon lg-text"/>
           <p className="user-login md-text">Login</p>
        </section>)}
      
      </nav>
    )
}
export {Navbar}