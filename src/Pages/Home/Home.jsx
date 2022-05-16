import { Navbar,SideNav} from "../../Components";
import { VideoListingPage } from "../VideoListingPage/VideoListingPage";
import "./Home.css";

const Home = () => {
 
  return (
         <>
         <Navbar />
         <SideNav />
         <VideoListingPage />
         </>
  );
};

export { Home };
