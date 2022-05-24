import { CategoryBar, PlaylistModal, VideoCard } from "../../Components";
import "./VideoListingPage.css";
import { useState,useEffect  } from "react";
import { getVideoServices } from "../../services/getVideoServices";
import { getCategoryService } from "../../services/getCategoryService";
import { useSideNav, useVideo } from "../../context";

const VideoListingPage = () => {
  const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false);
  const [playlistVideo, setPlaylistVideo] = useState({})
  const [allCategories, setAllCategories] = useState([]);

  const {allVideo, setAllVideo} = useVideo()


  useEffect(()=>{
   
    getVideoServices(setAllVideo);

  },[setAllVideo])

 useEffect(()=>{
   getCategoryService(setAllCategories)
 },[])

  return (
    <>
    <div
      className="main-container"
    >
          <CategoryBar allCategories ={allCategories} />
  
      <div className="video-card-container">
        {allVideo.map(video =>{return(
          <VideoCard key={video._id} videos= {video} setIsPlaylistModalVisible={setIsPlaylistModalVisible} setPlaylistVideo={setPlaylistVideo}/>
        )
       })}
       
       
      </div>
    </div>
    {isPlaylistModalVisible && <PlaylistModal setIsPlaylistModalVisible={setIsPlaylistModalVisible} playlistVideo = {playlistVideo}/>}
    </>
  );
};

export { VideoListingPage };
