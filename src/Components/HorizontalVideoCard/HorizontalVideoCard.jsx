import "./HorizontalVideoCard.css";
import {BiDotsVerticalRounded} from  "react-icons/bi";
import {Link} from "react-router-dom";

const HorizontalVideoCard = ({img, videoCreator, likes, views, desc}) =>{
    return(
        <div className="horizontal-video-card">
        <Link to="/singlevideopage">
          <img
            src={img}
            alt=""
            className="thumbnail"
          />
        </Link>

        <div className="video-info">
          <Link to="/singlevideopage">
           {desc}
          </Link>
          <p>{videoCreator}</p>
          <p>{views} | {likes}</p>
        </div>
        <button className="btn dot-btn lg-text">
                <BiDotsVerticalRounded />
       </button>
      </div>
    )
}
export{HorizontalVideoCard}