import "./VideoCard.css"
import {BiDotsVerticalRounded} from  "react-icons/bi";
import { VideoMenu } from "./VideoMenu";
import { useState } from "react";
import {Link} from "react-router-dom"

const VideoCard=({videos,isPlaylistModalVisible,setIsPlaylistModalVisible})=>{
   
    const [isVideoMenuVisible,setIsVideoMenuVisible] = useState(false);

    const {title,channelName,channelThumbnail, videoThumbnail,views,likes,videoLength} = videos

    return(
        <div className="video-card">
        <Link to="/singlevideopage"><img src={videoThumbnail} alt="" className="thumbnail" /></Link>
        <div className="flex-container">
            <img src={channelThumbnail} alt="" />
            <div className="video-info">
                <Link to="/singlevideopage">{title}</Link>
                <p>{channelName}</p>
                <p>{views} | {likes}</p>
            </div>
            <button className="btn dot-btn lg-text" onClick={()=>setIsVideoMenuVisible(isVideoMenuVisible => !isVideoMenuVisible)}>
                <BiDotsVerticalRounded />
            </button>
            
            <div className="icon">
              <span className="badge-count">{videoLength}</span>
            </div>
           
           {isVideoMenuVisible ? <VideoMenu 
           setIsVideoMenuVisible={setIsVideoMenuVisible} 
           isVideoMenuVisible={isVideoMenuVisible} 
           isPlaylistModalVisible={isPlaylistModalVisible}
           setIsPlaylistModalVisible={setIsPlaylistModalVisible}
           videos={videos}
           
           /> : null}

        </div>
    </div>
    )
}

export {VideoCard}