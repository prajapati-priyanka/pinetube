import { HorizontalVideoCard, Navbar, SideNav } from "../../Components"

const WatchLater = () =>{
    return(
        <>
        <Navbar />
        <SideNav />
        <div className="main-container playlist-page">
          <div className="row">
         <div className="playlist-left-content">
         <div className="card ecommerce-card" >  
        <div className="card-with-text-overlay">
          <figure className="card-header">
            <img src ="../assets/channel/channel.jpg" alt="" />
          </figure>
        </div>
        <div className="text-overlay lg-text">Videos</div>
      </div>
       
       <div className="playlist-info">
         <h3 className="playlist-name">Watch Later</h3>
         <p className="playlist-updated-time">Updated on May 10,2022</p>
       </div>

      <div className="divider"></div>

      <div className="video-creator">
          <img src="./assets/channel/channel.jpg" alt="" />
          <div className="video-channel">
            <p className="channel-name md-text">Priyanka Prajapati</p>
            <span className="channel-subscribers">50K subscribers</span>
          </div>
        </div> 

         </div>
         

      <div className="playlist-right-content">
      <HorizontalVideoCard
              img="../assets/thumbnails/thumbnail.jpg"
              desc="The Kapil Sharma Show | Baisakhi Special | Comedy Circus"
              videoCreator="The Kapil Sharma Show"
              likes="23M likes"
              views="15M views"
            />
      </div>
         
          </div>
          

           

           
           
        </div>
        </>
    )
}

export {WatchLater}