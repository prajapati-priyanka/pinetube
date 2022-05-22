import "./PlaylistPage.css";
import { MdPlaylistAdd} from "react-icons/md";
import { BsTrash} from "react-icons/bs";
import {Navbar, SideNav} from "../../Components"
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../context";
import { Fragment } from "react";

const PlaylistPage = () =>{
   
    const navigate= useNavigate();
    const {playlistState : {playlists}} = usePlaylist();

    const playlistPageHandler = () =>{
        navigate("/singleplaylistpage")
    }
    return(
        <>
        <Navbar />
        <SideNav />
       
       <div className="main-container">
           <h3 className="page-title">Playlist</h3>
         
              
                {playlists.map(playlist => (
                     <div key={playlist._id}  className="playlist flex-container" onClick={playlistPageHandler}> 
                     <MdPlaylistAdd className="playlist-icon x-lg-text"/>
                   <div>
                       <p className="playlist-name lg-text">{playlist.title}</p>
                       <p className="playlist-name text-muted">{playlist.videos.length} Videos</p>
                   </div>
                   <button className="btn trash-icon lg-text">
                        <BsTrash />
                   </button>
                   </div>
                ))}
                  

       
    </div>
       </>
    )
}

export {PlaylistPage}