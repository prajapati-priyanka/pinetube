import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useAuth, useLike } from "../../context";
import { useNavigate } from "react-router-dom";
import { toggleLikeHandler } from "../../helper/like-helper";

const VideoMenu = ({
  setIsPlaylistModalVisible,
  setIsVideoMenuVisible,
  videos,
  setPlaylistVideo,
}) => {
  const { authState } = useAuth();
  const {
    likeDispatch,
    likeState: { likeData },
  } = useLike();
  const navigate = useNavigate();
  const token = authState.token || localStorage.getItem("token");

  const saveToPlaylistHandler = () => {
    if (token) {
      setIsPlaylistModalVisible(true);
      setIsVideoMenuVisible(false);
      setPlaylistVideo(videos);
    } else {
      navigate("/login");
    }
  };

  const isVideoInLikePage = likeData.find((item) => item._id === videos._id);

  const likeClickHandler = () => {
    setIsVideoMenuVisible(false);
    toggleLikeHandler(token, likeDispatch, isVideoInLikePage, navigate, videos);
  };

  return (
    <>
      <div className="video-menu">
        <button
          className="btn menu-row flex-container"
          title="Save To Playlist"
          onClick={saveToPlaylistHandler}
        >
          <MdPlaylistAdd className="menu-row-icon lg-text" />
          <span className="icon-name md-text">Save To Playlist</span>
        </button>

        <button className="btn menu-row flex-container" title="Watch Later">
          <MdOutlineWatchLater className="menu-row-icon lg-text" />
          <span className="icon-name md-text">Save to Watch Later</span>
        </button>

        <button
          className="btn menu-row flex-container"
          onClick={likeClickHandler}
        >
          <AiOutlineLike className="menu-row-icon lg-text" />
          <span className="icon-name md-text">
            {isVideoInLikePage && token ? "Remove from" : "Add To"} liked Videos
          </span>
        </button>
      </div>
    </>
  );
};

export { VideoMenu };
