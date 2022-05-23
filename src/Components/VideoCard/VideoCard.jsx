import "./VideoCard.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { VideoMenu } from "./VideoMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ videos, setIsPlaylistModalVisible, setPlaylistVideo }) => {
  const [isVideoMenuVisible, setIsVideoMenuVisible] = useState(false);
  const navigate = useNavigate();

  const {
    title,
    channelName,
    channelThumbnail,
    videoThumbnail,
    views,
    likes,
    videoLength,
  } = videos;

  const videoNavigation = () => {
    navigate(`/explore/${videos._id}`);
  };

  return (
    <div className="video-card" onClick={videoNavigation}>
      <img src={videoThumbnail} alt="" className="thumbnail" />
      <div className="flex-container">
        <img src={channelThumbnail} alt="" />
        <div className="video-info">
          <p className="title">{title}</p>
          <p className="channel-name">{channelName}</p>
          <p className="views-likes">
            {views} | {likes}
          </p>
        </div>
        <button
          className="btn dot-btn lg-text"
          onClick={(e) =>{ e.stopPropagation()
            setIsVideoMenuVisible((isVideoMenuVisible) => !isVideoMenuVisible)
          }}
        >
          <BiDotsVerticalRounded />
        </button>

        <div className="icon">
          <span className="badge-count">{videoLength}</span>
        </div>

        {isVideoMenuVisible ? (
          <VideoMenu
            setIsVideoMenuVisible={setIsVideoMenuVisible}
            isVideoMenuVisible={isVideoMenuVisible}
            setIsPlaylistModalVisible={setIsPlaylistModalVisible}
            videos={videos}
            setPlaylistVideo={setPlaylistVideo}
          />
        ) : null}
      </div>
    </div>
  );
};

export { VideoCard };
