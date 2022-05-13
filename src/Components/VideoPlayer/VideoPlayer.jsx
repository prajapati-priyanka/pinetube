import "./VideoPlayer.css";
import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

import ReactPlayer from "react-player";

const VideoPlayer = () =>{
    return(
        <div className="react-player-wrapper">
        <ReactPlayer
          url="https://youtu.be/m6LOf2Gvjxk"
          controls
          className="react-player"
          width="100%"
        />
        <div className="video-hashtags">
          <a href="">#Coding</a>
          <a href="">#Programming</a>
          <a href="">#Javascript</a>
          <a href="">#Beginners</a>
        </div>
        <h4 className="video-title">
          The Kapil Sharma Show | Baisakhi Special | Comedy Circus
        </h4>
        <div className="video-stats">
          <p className="video-views-info">21M Views | 2 days ago</p>
          <div className="video-user-action">
            <a
              href="/"
              className="side-nav-link flex-container"
              title="Liked"
            >
              <AiOutlineLike className="side-nav-icon" />
              <span className="side-nav-icon-name">Liked</span>
            </a>

            <a
              href="/"
              className="side-nav-link flex-container"
              title="Watch Later"
            >
              <MdOutlineWatchLater className="side-nav-icon" />
              <span className="side-nav-icon-name">Watch Later</span>
            </a>

            <a
              href="/"
              className="side-nav-link flex-container"
              title="Playlist"
            >
              <MdPlaylistAdd className="side-nav-icon" />
              <span className="side-nav-icon-name">Playlists</span>
            </a>
          </div>
        </div>
        <div className="divider"></div>

        <div className="video-creator">
          <img src="./assets/channel/channel.jpg" />
          <div className="video-channel">
            <p className="channel-name md-text">The Kapil Sharma Show</p>
            <span className="channel-subscribers">50K subscribers</span>
          </div>
          <button className="btn btn-primary btn-subscribe">
            SUBSCRIBE
          </button>
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
    )
}

export {VideoPlayer}