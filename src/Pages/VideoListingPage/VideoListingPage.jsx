import { CategoryBar, PlaylistModal, VideoCard } from "../../Components";
import "./VideoListingPage.css";
import { useState,useEffect  } from "react";
import { getVideoServices,getCategoryService } from "../../services";
import { useVideo } from "../../context";
import { searchVideoData, categoryData } from "../../helper";

const VideoListingPage = ({searchData}) => {
  const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false);
  const [playlistVideo, setPlaylistVideo] = useState({})
  const [allCategories, setAllCategories] = useState({
    categories: [],
    selectedCategory : ""
  });

  const {allVideo, setAllVideo} = useVideo()


  useEffect(()=>{
   
    getVideoServices(setAllVideo);

  },[setAllVideo])

 useEffect(()=>{
   getCategoryService(setAllCategories)
 },[])

 
 const finalFilteredData = () =>{
  return searchData ? searchVideoData(allVideo, searchData) : categoryData(allVideo, allCategories.selectedCategory)
 }


  return (
    <>
    <div
      className="main-container"
    >
          <CategoryBar allCategories ={allCategories} setAllCategories={setAllCategories} />
  
      <div className="video-card-container">
        {finalFilteredData().length > 0 ? (finalFilteredData().map(video =>{return(
          <VideoCard key={video._id} videos= {video} setIsPlaylistModalVisible={setIsPlaylistModalVisible} setPlaylistVideo={setPlaylistVideo}/>
        )
       })): <h2 className="text-center">No Videos Found</h2>}
       
       
      </div>
    </div>
    {isPlaylistModalVisible && <PlaylistModal setIsPlaylistModalVisible={setIsPlaylistModalVisible} playlistVideo = {playlistVideo}/>}
    </>
  );
};

export { VideoListingPage };
