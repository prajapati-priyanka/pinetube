import { MdPlaylistAdd,MdOutlineWatchLater} from "react-icons/md";
import { AiOutlineLike} from "react-icons/ai";

const VideoMenu = ()=>{
    return(
        <div className="video-menu">
          <button className="btn menu-row flex-container" title="Save To Playlist">
          <MdPlaylistAdd className="menu-row-icon lg-text"/>
          <span className="icon-name md-text">Save To Playlist</span>
         </button>

         <button className="btn menu-row flex-container" title="Watch Later" >
          <MdOutlineWatchLater className="menu-row-icon lg-text"/>
          <span className="icon-name md-text">Save to Watch Later</span>
         </button>

        <button className="btn menu-row flex-container" title="Liked">
          <AiOutlineLike className="menu-row-icon lg-text" />
          <span className="icon-name md-text">Add To Liked Videos</span>
        </button>
        </div>
    )
}

export{VideoMenu}