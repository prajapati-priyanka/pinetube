import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useAuth, useLike, useWatchLater } from "../../context";
import { useNavigate } from "react-router-dom";
import { toggleLikeHandler } from "../../helper/like-helper";
import { checkItemInArrayOfObject } from "../../helper/utility-helper";
import {toggleWatchLaterHandler} from "../../helper/watchLater-helper"

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
  const {watchLaterState : {watchLater}, watchLaterDispatch} = useWatchLater();
  const navigate = useNavigate();
  const token = authState.token || localStorage.getItem("token");

  const saveToPlaylistHandler = (e) => {
    e.stopPropagation()
    if (token) {
      setIsPlaylistModalVisible(true);
      setIsVideoMenuVisible(false);
      setPlaylistVideo(videos);
    } else {
      navigate("/login");
    }
  };

  const isVideoInLikePage = checkItemInArrayOfObject(likeData, videos)
  const isVideoInWatchLaterPage = checkItemInArrayOfObject(watchLater, videos)

  const likeClickHandler = (e) => {
    e.stopPropagation();
    setIsVideoMenuVisible(false);
    toggleLikeHandler(token, likeDispatch, isVideoInLikePage, navigate, videos);
  };

  const watchLaterHandler = (e) =>{
    e.stopPropagation();
    setIsVideoMenuVisible(false);
    toggleWatchLaterHandler(token, watchLaterDispatch, isVideoInWatchLaterPage, navigate,videos )
  }

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

        <button className="btn menu-row flex-container" title="Watch Later" onClick={watchLaterHandler}>
          <MdOutlineWatchLater className="menu-row-icon lg-text" />
          <span className="icon-name md-text">{isVideoInWatchLaterPage && token ? "Remove from Watch Later" : "Save to Watch Later"}</span>
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
