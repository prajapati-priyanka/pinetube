import "./VideoCard.css"
import {BiDotsVerticalRounded} from  "react-icons/bi";

const VideoCard=({img,channelImg, desc, views, likes, videoCreator})=>{
    return(
        <div className="video-card">
        <a href=""><img src={img} alt="" className="thumbnail" /></a>
        <div className="flex-container">
            <img src={channelImg} alt="" />
            <div className="video-info">
                <a href="">{desc}</a>
                <p>{videoCreator}</p>
                <p>{views} | {likes}</p>
            </div>
            <button className="btn dot-btn lg-text">
                <BiDotsVerticalRounded />
            </button>
        </div>
    </div>
    )
}

export {VideoCard}