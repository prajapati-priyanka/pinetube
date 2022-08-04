import "./VideoPlayer.css";
import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import {
  checkItemInArrayOfObject,
  toggleWatchLaterHandler,
  toggleLikeHandler,
} from "../../helper";
import { useAuth, useLike, useWatchLater } from "../../context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PlaylistModal } from "../Modal/PlaylistModal";

const VideoPlayer = ({ videoData }) => {
  const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false);
  const {
    likeState: { likeData },
    likeDispatch,
  } = useLike();
  const { authState } = useAuth();
  const navigate = useNavigate();
  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();
  const token = authState.token || localStorage.getItem("token");

  // like handler
  const isVideoInLikePage = checkItemInArrayOfObject(likeData, videoData);

  const likeClickHandler = (e) => {
    e.stopPropagation();
    toggleLikeHandler(
      token,
      likeDispatch,
      isVideoInLikePage,
      navigate,
      videoData
    );
  };

  // watch later
  const isVideoInWatchLaterPage = checkItemInArrayOfObject(
    watchLater,
    videoData
  );
  const watchLaterHandler = (e) => {
    e.stopPropagation();
    toggleWatchLaterHandler(
      token,
      watchLaterDispatch,
      isVideoInWatchLaterPage,
      navigate,
      videoData
    );
  };

  // save to playlist
  const savePlaylistHandler = () => {
    setIsPlaylistModalVisible(true);
  };

  return (
    <div className="player-wrapper flex-container">
      <div className="iframe-wrapper">
        <iframe
          className="video-player"
          src={`https://www.youtube.com/embed/${videoData._id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-details">
        <div className="video-hashtags">
          <span>#{videoData.channelName}</span>
          <span>#{videoData.category}</span>
        </div>
        <h4 className="video-title">{videoData.title}</h4>
        <div className="video-stats">
          <p className="video-views-info">
            {videoData.views} views | {videoData.likes} likes
          </p>
          <div className="video-user-action flex-container">
            <AiOutlineLike
              className={`lg-text like-btn ${
                isVideoInLikePage && token ? "active-icon" : null
              }`}
              title="Liked"
              onClick={likeClickHandler}
            />

            <MdOutlineWatchLater
              className={`lg-text watch-later-btn ${
                isVideoInWatchLaterPage && token ? "active-icon" : null
              }`}
              title="Watch Later"
              onClick={watchLaterHandler}
            />

            <MdPlaylistAdd
              className="lg-text playlist-btn"
              title="Playlist"
              onClick={savePlaylistHandler} 
            />
          </div>
        </div>
        <div className="divider"></div>

        <div className="video-creator">
          <img src={videoData.channelThumbnail} alt="" />
          <div className="video-channel">
            <p className="channel-name md-text">{videoData.channelName}</p>
            <span className="channel-subscribers">
              {videoData.subscribers} subscribers
            </span>
          </div>
          <button className="btn btn-primary btn-subscribe">SUBSCRIBE</button>
        </div>
        <div className="divider"></div>

        <div className="video-comments">
          <h4 className="comments-heading">Comments</h4>
          <div className="add-comment">
            <input
              type="text"
              placeholder="Add a Comment.."
              className="comment-input"
            />
            <button className="btn btn-outline-primary">Comment</button>
          </div>
        </div>
      </div>
      {isPlaylistModalVisible ? (
        <PlaylistModal
          setIsPlaylistModalVisible={setIsPlaylistModalVisible}
          playlistVideo={videoData}
        />
      ) : null}
    </div>
  );
};

export { VideoPlayer };
