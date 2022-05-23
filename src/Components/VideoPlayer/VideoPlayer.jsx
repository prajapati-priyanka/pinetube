import "./VideoPlayer.css";
import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";


const VideoPlayer = ({videoData}) => {
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
        <h4 className="video-title">
        {videoData.title}
        </h4>
        <div className="video-stats">
          <p className="video-views-info">{videoData.views} | 2 days ago</p>
          <div className="video-user-action">
            <div className="flex-container" title="Liked">
              <AiOutlineLike className="" />
              <span className="">Liked</span>
            </div>

            <div className="flex-container" title="Watch Later">
              <MdOutlineWatchLater className="" />
              <span className="">Watch Later</span>
            </div>

            <div className="flex-container" title="Playlist">
              <MdPlaylistAdd className="" />
              <span className="">Playlists</span>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="video-creator">
          <img src={videoData.channelThumbnail} alt="" />
          <div className="video-channel">
            <p className="channel-name md-text">{videoData.channelName}</p>
            <span className="channel-subscribers">{videoData.subscribers} subscribers</span>
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
    </div>
  );
};

export { VideoPlayer };
