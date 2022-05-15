import {
  MdOutlineExplore,
  MdPlaylistAdd,
  MdOutlineWatchLater,
} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import "./SideNav.css";
import {Link} from "react-router-dom";
import { useSideNav } from "../../context";

const SideNav = () => {
 
  const {sideNavShrinked} = useSideNav()
  
  return (
    <div className={`side-nav ${sideNavShrinked ? "shrinked" : ""}`}>
      <div className="side-nav-list md-text">
        <Link to="/explore" className="side-nav-link flex-container" title="Explore">
          <MdOutlineExplore className="side-nav-icon" />
          <span className="side-nav-icon-name">Explore</span>
        </Link>

        <Link to="/playlists" className="side-nav-link flex-container"  title="Playlist">
          <MdPlaylistAdd className="side-nav-icon"/>
          <span className="side-nav-icon-name">Playlists</span>
        </Link>

        <Link to="/watchlater" className="side-nav-link flex-container" title="Watch Later" >
          <MdOutlineWatchLater className="side-nav-icon" />
          <span className="side-nav-icon-name">Watch Later</span>
        </Link>

        <Link to="/liked" className="side-nav-link flex-container" title="Liked">
          <AiOutlineLike className="side-nav-icon" />
          <span className="side-nav-icon-name">Liked</span>
        </Link>

        <Link to="/history" className="side-nav-link flex-container" title="History">
          <BiHistory className="side-nav-icon" />
          <span className="side-nav-icon-name">History</span>
        </Link>
      </div>
    </div>
  );
};

export { SideNav };
