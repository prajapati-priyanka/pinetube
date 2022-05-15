import { useState } from "react";
import { Navbar,SideNav} from "../../Components";
import { VideoListingPage } from "../VideoListingPage/VideoListingPage";
import "./Home.css";

const Home = () => {
  const [sideNavShrinked, setSideNavShrinked] = useState(false)
  return (
         <>
         <Navbar sideNavShrinked={sideNavShrinked} setSideNavShrinked={setSideNavShrinked}/>
         <SideNav sideNavShrinked={sideNavShrinked} setSideNavShrinked={setSideNavShrinked}/>
         <VideoListingPage sideNavShrinked={sideNavShrinked} />
         </>
  );
};

export { Home };
