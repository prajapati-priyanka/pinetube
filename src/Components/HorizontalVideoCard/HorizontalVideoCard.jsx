import "./HorizontalVideoCard.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useLike } from "../../context";
import { removeFromLikePage } from "../../services/likeServices/removeFromLikePage";

const HorizontalVideoCard = ({ video, playlistID }) => {
  const location = useLocation();
  const { authState } = useAuth();
  const { likeDispatch } = useLike();
  const token = authState.token || localStorage.getItem("token");
  
  return (
    <div className="horizontal-video-card">
      <Link to="/singlevideopage">
     
        <img src={video.videoThumbnail} alt="" className="thumbnail" />
      </Link>

      <div className="video-info">
       
        <Link to="/singlevideopage">{video.title}</Link>
        
        <p>{video.channelName}</p>
        <p>
         
          {video.views} | {video.likes}
        </p>
      </div>
      {location.pathname === `/playlists/${playlistID}` ? (
        <button
          className="btn dot-btn lg-text"
          onClick={() => {
            // removeFromLikePage(likeVideo, token, likeDispatch);
          }}
        >
          <BsTrash />
        </button>
      ) : (
        <button className="btn dot-btn lg-text">
          <BiDotsVerticalRounded />
        </button>
      )}
    </div>
  );
};
export { HorizontalVideoCard };
