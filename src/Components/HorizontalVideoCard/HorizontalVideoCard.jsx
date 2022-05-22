import "./HorizontalVideoCard.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useLike, usePlaylist } from "../../context";
import {
  removeFromLikePage,
  deleteVideoFromSinglePlaylistPage,
} from "../../services";

const HorizontalVideoCard = ({ video, playlistID }) => {
  const location = useLocation();
  const { authState } = useAuth();
  const { likeDispatch } = useLike();
  const { playlistDispatch } = usePlaylist();
  const token = authState.token || localStorage.getItem("token");

  console.log(video);
  const removeVideoHandler = () => {
    if (location.pathname === "/liked") {
      removeFromLikePage(video, token, likeDispatch);
    }
    if (location.pathname.includes("/playlist")) {
      deleteVideoFromSinglePlaylistPage(
        token,
        playlistID,
        video._id,
        playlistDispatch
      );
    }
  };

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
      {location.pathname === `/playlists/${playlistID}` ||
      location.pathname === "/liked" ? (
        <button className="btn dot-btn lg-text" onClick={removeVideoHandler}>
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
