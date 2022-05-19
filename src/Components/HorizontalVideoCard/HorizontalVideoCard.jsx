import "./HorizontalVideoCard.css";
import {BiDotsVerticalRounded} from  "react-icons/bi";
import {Link} from "react-router-dom";

const HorizontalVideoCard = ({likeVideo}) =>{
    return(
        <div className="horizontal-video-card">
        <Link to="/singlevideopage">
          <img
            src={likeVideo.videoThumbnail}
            alt=""
            className="thumbnail"
          />
        </Link>

        <div className="video-info">
          <Link to="/singlevideopage">
           {likeVideo.title}
          </Link>
          <p>{likeVideo.channelName}</p>
          <p>{likeVideo.views} | {likeVideo.likes}</p>
        </div>
        <button className="btn dot-btn lg-text">
                <BiDotsVerticalRounded />
       </button>
      </div>
    )
}
export{HorizontalVideoCard}