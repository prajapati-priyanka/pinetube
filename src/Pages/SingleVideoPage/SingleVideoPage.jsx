import "./SingleVideoPage.css";
import {
  HorizontalVideoCard,
  Navbar,
  SideNav,
  VideoPlayer,
} from "../../Components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSingleVideoService } from "../../services";
import { useState } from "react";
import { useVideo } from "../../context";
import { getVideoServices } from "../../services";

const SingleVideoPage = () => {
  const [singleVideoData, setSingleVideoData] = useState([])
 const {videoID} = useParams();
 const {allVideo,setAllVideo} = useVideo()

useEffect(()=>{
getSingleVideoService(videoID, setSingleVideoData);
},[videoID])

useEffect(()=>{
   
  getVideoServices(setAllVideo);

},[])

  return (
    <>
      <Navbar />
      <SideNav />
      <div className="main-container play-container">
        <div className="row">
          <VideoPlayer videoData = {singleVideoData}/>
          <div className="right-sidebar">
          {allVideo.map(video => <HorizontalVideoCard key={video._id} video = {video}/>)}  
          </div>
        </div>
      </div>
    </>
  );
};
export { SingleVideoPage };
