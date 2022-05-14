import "./HorizontalVideoCard.css";
import {BiDotsVerticalRounded} from  "react-icons/bi";

const HorizontalVideoCard = ({img, videoCreator, likes, views, desc}) =>{
    return(
        <div className="horizontal-video-card">
        <a href="">
          <img
            src={img}
            alt=""
            className="thumbnail"
          />
        </a>

        <div className="video-info">
          <a href="">
           {desc}
          </a>
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