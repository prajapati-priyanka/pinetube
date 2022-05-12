import { useState } from "react";
import { Navbar,SideNav,VideoContent } from "../../Components";
import "./Home.css";

const Home = () => {
  const [sideNavShrinked, setSideNavShrinked] = useState(false)
  return (
         <>
         <Navbar sideNavShrinked={sideNavShrinked} setSideNavShrinked={setSideNavShrinked}/>
         <SideNav sideNavShrinked={sideNavShrinked} setSideNavShrinked={setSideNavShrinked}/>
         <VideoContent sideNavShrinked={sideNavShrinked} />
         </>
  );
};

export { Home };
