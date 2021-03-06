import { useLocation } from "react-router-dom";
import { useAuth, useHistory } from "../../context";
import "./ContentSidebar.css";
import { deleteAllVideoService } from "../../services/historyServices/deleteAllVideoService";

export const ContentSidebar = ({ videoData, playlistTitle }) => {

  const location = useLocation();
  const {authState} = useAuth();
  const {historyDispatch} = useHistory();
 const token = authState.token || localStorage.getItem("token") 

  const getPageName = () => {
    if (location.pathname === "/liked") {
      return "Liked Videos";
    }
    if (location.pathname.includes("/playlist")) {
      return playlistTitle;
    }
  };

 

  return (
    <div className="playlist-left-content">
      <div className="card ecommerce-card">
        <div className="card-with-text-overlay">
          {videoData.length > 0 ? (
            <figure className="card-header">
              <img src={videoData[0].videoThumbnail} alt="videoThumnail" />
            </figure>
          ) : (
            <figure className="card-header">
              <img src="../assets/defaultImg.jpg" alt="default" />
            </figure>
          )}
        </div>
        <div className="text-overlay lg-text">Videos({videoData.length})</div>
      </div>

      <div className="playlist-info">
        <h3 className="playlist-name">{getPageName()}</h3>
        <p className="playlist-updated-time">Updated on May 10,2022</p>
      </div>

      <div className="divider"></div>

      <div className="video-creator">
        <img
          src="https://lh3.googleusercontent.com/ogw/ADea4I4uUERI95xonyxzL3nGOOMdNrpjNtGEXURXLFL0=s32-c-mo"
          alt="channel"
        />
        <div className="video-channel">
          <p className="channel-name md-text">Priyanka Prajapati</p>
          <span className="channel-subscribers">50K subscribers</span>
        </div>
      </div>
  
    {location.pathname === "/history" && videoData.length > 0 ? (<button className="btn btn-outline-primary clear-all-btn" onClick={()=>deleteAllVideoService(token, historyDispatch)}>CLEAR ALL</button>) : null}  
    </div>
  );
};
