import { HiOutlineMenu,HiOutlineUser } from "react-icons/hi";
import { BsSearch  } from "react-icons/bs";
import "./Home.css";

const Home = () => {
  return (
    <header className="header-wrapper flex-container">
      <section className="header-left flex-container">
        <HiOutlineMenu className="menu-bar lg-text"/>
        <img src="../assets/logo.png" className="logo-img" alt="" />
       
      </section>
      <section className="header-middle">
      <input
          type="search"
          placeholder="Search Product"
          className="input-search"
        />
        <button type="submit" className="btn-search">
          <BsSearch />
        </button>
      </section>
      <section className="header-right flex-container">
          <HiOutlineUser className="user-icon lg-text"/>
         <p className="user-login md-text">Login</p>
      </section>
    </header>
  );
};

export { Home };
