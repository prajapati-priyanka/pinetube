import { HiOutlineMenu,HiOutlineUser } from "react-icons/hi";
import { BsSearch  } from "react-icons/bs";
import "./Navbar.css"

const Navbar = ({sideNavShrinked, setSideNavShrinked}) =>{
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
        <section className="nav-right flex-container">
            <HiOutlineUser className="user-icon lg-text"/>
           <p className="user-login md-text">Login</p>
        </section>
      </nav>
    )
}
export {Navbar}