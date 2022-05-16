import "./VideoPlayer.css";
import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  return (
    <div className="player-wrapper flex-container">
      <div className="iframe-wrapper">
        <iframe
          className="video-player"
          src={`https://www.youtube.com/embed/m6LOf2Gvjxk`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-details">
        <div className="video-hashtags">
          <Link to="">#Coding</Link>
          <Link to="">#Programming</Link>
          <Link to="">#Javascript</Link>
          <Link to="">#Beginners</Link>
        </div>
        <h4 className="video-title">
          The Kapil Sharma Show | Baisakhi Special | Comedy Circus
        </h4>
        <div className="video-stats">
          <p className="video-views-info">21M Views | 2 days ago</p>
          <div className="video-user-action">
            <div className="flex-container" title="Liked">
              <AiOutlineLike className="side-nav-icon" />
              <span className="side-nav-icon-name">Liked</span>
            </div>

            <div className="flex-container" title="Watch Later">
              <MdOutlineWatchLater className="side-nav-icon" />
              <span className="side-nav-icon-name">Watch Later</span>
            </div>

            <div className="flex-container" title="Playlist">
              <MdPlaylistAdd className="side-nav-icon" />
              <span className="side-nav-icon-name">Playlists</span>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="video-creator">
          <img src="./assets/channel/channel.jpg" alt="" />
          <div className="video-channel">
            <p className="channel-name md-text">The Kapil Sharma Show</p>
            <span className="channel-subscribers">50K subscribers</span>
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
