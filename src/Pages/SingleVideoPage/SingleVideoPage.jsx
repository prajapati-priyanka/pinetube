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
import { useAuth, useHistory, useVideo } from "../../context";
import { getVideoServices } from "../../services";
import { addVideoToHistoryService } from "../../services/historyServices/addVideoToHistoryService";

const SingleVideoPage = () => {
  const [singleVideoData, setSingleVideoData] = useState(false);
  const { videoID } = useParams();
  const { allVideo, setAllVideo } = useVideo();
  const {authState: {token}} = useAuth();
  const {historyDispatch, historyState: {history}} = useHistory()

  useEffect(() => {
    getSingleVideoService(videoID, setSingleVideoData);
  }, [videoID]);

  useEffect(() => {
    getVideoServices(setAllVideo);
  }, [setAllVideo]);

 useEffect(()=>{
   if(token && singleVideoData){
    addVideoToHistoryService(token, singleVideoData, historyDispatch,history)
   }
 },[token, singleVideoData, historyDispatch,history])

  return (
    <>
      <Navbar />
      <SideNav />
      {singleVideoData ? (
        <div className="main-container play-container">
          <div className="row">
            <VideoPlayer videoData={singleVideoData} />
            <div className="right-sidebar">
              {allVideo.map((video) => (
                <HorizontalVideoCard key={video._id} video={video} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-center">Loading...</h2>
      )}
    </>
  );
};
export { SingleVideoPage };
