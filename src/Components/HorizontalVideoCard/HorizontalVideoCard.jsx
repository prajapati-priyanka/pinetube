import "./HorizontalVideoCard.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useLike } from "../../context";
import { removeFromLikePage } from "../../services/likeServices/removeFromLikePage";

const HorizontalVideoCard = ({ likeVideo }) => {
  const location = useLocation();
  const { authState } = useAuth();
  const { likeDispatch } = useLike();
  const token = authState.token || localStorage.getItem("token");
  return (
    <div className="horizontal-video-card">
      <Link to="/singlevideopage">
        <img src={likeVideo.videoThumbnail} alt="" className="thumbnail" />
      </Link>

      <div className="video-info">
        <Link to="/singlevideopage">{likeVideo.title}</Link>
        <p>{likeVideo.channelName}</p>
        <p>
          {likeVideo.views} | {likeVideo.likes}
        </p>
      </div>
      {location.pathname === "/liked" ? (
        <button
          className="btn dot-btn lg-text"
          onClick={() => {
            removeFromLikePage(likeVideo, token, likeDispatch);
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
