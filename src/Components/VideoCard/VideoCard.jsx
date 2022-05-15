import "./VideoCard.css"
import {BiDotsVerticalRounded} from  "react-icons/bi";
import { VideoMenu } from "./VideoMenu";
import { useState } from "react";

const VideoCard=({img,channelImg, desc, views, likes, videoCreator})=>{
   
    const [isVideoMenuVisible,setIsVideoMenuVisible] = useState(false)

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
            <button className="btn dot-btn lg-text" onClick={()=>setIsVideoMenuVisible(isVideoMenuVisible => !isVideoMenuVisible)}>
                <BiDotsVerticalRounded />
            </button>
           
           {isVideoMenuVisible ? <VideoMenu setIsVideoMenuVisible={setIsVideoMenuVisible} isVideoMenuVisible={isVideoMenuVisible} /> : null}

        </div>
    </div>
    )
}

export {VideoCard}