import { useState } from "react";
import { Navbar,SideNav} from "../../Components";
import { VideoListingPage } from "../VideoListingPage/VideoListingPage";
import "./Home.css";

const Home = () => {
   const [searchData, setSearchData] = useState("");



  return (
         <>
         <Navbar searchData={searchData} setSearchData={setSearchData} />
         <SideNav />
         <VideoListingPage searchData={searchData} setSearchData={setSearchData} />
         </>
  );
};

export { Home };
