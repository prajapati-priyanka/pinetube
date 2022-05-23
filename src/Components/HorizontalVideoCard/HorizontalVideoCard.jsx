import "./HorizontalVideoCard.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useLike, usePlaylist, useWatchLater } from "../../context";
import {
  removeFromLikePage,
  deleteVideoFromSinglePlaylistPage,
} from "../../services";
import { removeFromWatchLaterPage } from "../../services/watchLaterServices/removeFromWatchLaterPage";

const HorizontalVideoCard = ({ video, playlistID }) => {
  const location = useLocation();
  const { authState } = useAuth();
  const { likeDispatch } = useLike();
  const { playlistDispatch } = usePlaylist();
  const { watchLaterDispatch } = useWatchLater();
  const token = authState.token || localStorage.getItem("token");

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

    if (location.pathname === "/watchlater") {
      removeFromWatchLaterPage(video, token, watchLaterDispatch);
    }
  };

  return (
    <div className="horizontal-video-card">
      <Link to="/singlevideopage">
        <img src={video.videoThumbnail} alt="" className="thumbnail" />
      </Link>

      <div className="video-info">
        <p className="title">{video.title}</p>

        <p className="channel-name">{video.channelName}</p>
        <p className="views-likes">
          {video.views} | {video.likes}
        </p>
      </div>
      {location.pathname === `/playlists/${playlistID}` ||
      location.pathname === "/liked" ||
      location.pathname === "/watchlater" ? (
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
