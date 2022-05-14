import "./PlaylistPage.css";
import { MdPlaylistAdd} from "react-icons/md";
import { BsTrash} from "react-icons/bs";
import {Navbar, SideNav} from "../../Components"

const PlaylistPage = () =>{
    return(
        <>
        <Navbar />
        <SideNav />
       
       <div className="main-container">
           <h3 className="page-title">Playlist</h3>
           <div className="playlist flex-container">
              
                
                   <MdPlaylistAdd className="playlist-icon x-lg-text"/>
                   <div>
                       <p className="playlist-name lg-text">Hello</p>
                       <p className="playlist-name text-muted">6 vidoes</p>
                   </div>
                   <button className="btn trash-icon lg-text">
                        <BsTrash />
                   </button>

                  
              
           </div>
           <div className="playlist flex-container">
              
                
                   <MdPlaylistAdd className="playlist-icon x-lg-text"/>
                   <div>
                       <p className="playlist-name lg-text">Hello</p>
                       <p className="playlist-name text-muted">6 vidoes</p>
                   </div>
                   <button className="btn trash-icon lg-text">
                        <BsTrash />
                   </button>

                  
              
           </div>
       </div>
       </>
    )
}

export {PlaylistPage}