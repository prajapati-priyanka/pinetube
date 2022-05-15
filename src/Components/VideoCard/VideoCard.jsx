import "./VideoCard.css"
import {BiDotsVerticalRounded} from  "react-icons/bi";
import { VideoMenu } from "./VideoMenu";
import { useState } from "react";
import {Link} from "react-router-dom"

const VideoCard=({img,channelImg, desc, views, likes, videoCreator,isPlaylistModalVisible, setIsPlaylistModalVisible})=>{
   
    const [isVideoMenuVisible,setIsVideoMenuVisible] = useState(false);
  

    return(
        <div className="video-card">
        <Link to="/singlevideopage"><img src={img} alt="" className="thumbnail" /></Link>
        <div className="flex-container">
            <img src={channelImg} alt="" />
            <div className="video-info">
                <Link to="/singlevideopage">{desc}</Link>
                <p>{videoCreator}</p>
                <p>{views} | {likes}</p>
            </div>
            <button className="btn dot-btn lg-text" onClick={()=>setIsVideoMenuVisible(isVideoMenuVisible => !isVideoMenuVisible)}>
                <BiDotsVerticalRounded />
            </button>
            
            <div class="icon">
              <span class="badge-count">21:4</span>
            </div>
           
           {isVideoMenuVisible ? <VideoMenu 
           setIsVideoMenuVisible={setIsVideoMenuVisible} 
           isVideoMenuVisible={isVideoMenuVisible} 
           isPlaylistModalVisible={isPlaylistModalVisible}
           setIsPlaylistModalVisible={setIsPlaylistModalVisible}
           
           /> : null}

        </div>
    </div>
    )
}

export {VideoCard}