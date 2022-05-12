import "./VideoContent.css"

const VideoContent = ({sideNavShrinked}) =>{
    return(
        <div className={`main-container ${sideNavShrinked ? "expand-main-container" : ""}`}>
            <div className="video-card-container">
            <div className="video-card">
                <a href=""><img src="../assets/thumbnails/thumbnail.jpg" alt="" className="thumbnail" /></a>
                
                <div className="flex-container">
                    <img src="../assets/channel/channel.jpg" alt="" />
                    <div className="video-info">
                        <a href="">The Kapil Sharma Show | Baisakhi Special | Comedy Circus</a>
                        <p>Kapil Sharma</p>
                        <p>15M Views | 23M Likes</p>
                    </div>
                </div>
            </div>
            <div className="video-card">
                <a href=""><img src="../assets/thumbnails/thumbnail.jpg" alt="" className="thumbnail" /></a>
                
                <div className="flex-container">
                    <img src="../assets/channel/channel.jpg" alt="" />
                    <div className="video-info">
                        <a href="">The Kapil Sharma Show | Baisakhi Special | Comedy Circus</a>
                        <p>Kapil Sharma</p>
                        <p>15M Views | 23M Likes</p>
                    </div>
                </div>
            </div>
            <div className="video-card">
                <a href=""><img src="../assets/thumbnails/thumbnail.jpg" alt="" className="thumbnail" /></a>
                
                <div className="flex-container">
                    <img src="../assets/channel/channel.jpg" alt="" />
                    <div className="video-info">
                        <a href="">The Kapil Sharma Show | Baisakhi Special | Comedy Circus</a>
                        <p>Kapil Sharma</p>
                        <p>15M Views | 23M Likes</p>
                    </div>
                </div>
            </div>
            <div className="video-card">
                <a href=""><img src="../assets/thumbnails/thumbnail.jpg" alt="" className="thumbnail" /></a>
                
                <div className="flex-container">
                    <img src="../assets/channel/channel.jpg" alt="" />
                    <div className="video-info">
                        <a href="">The Kapil Sharma Show | Baisakhi Special | Comedy Circus</a>
                        <p>Kapil Sharma</p>
                        <p>15M Views | 23M Likes</p>
                    </div>
                </div>
            </div>
            <div className="video-card">
                <a href=""><img src="../assets/thumbnails/thumbnail.jpg" alt="" className="thumbnail" /></a>
                
                <div className="flex-container">
                    <img src="../assets/channel/channel.jpg" alt="" />
                    <div className="video-info">
                        <a href="">The Kapil Sharma Show | Baisakhi Special | Comedy Circus</a>
                        <p>Kapil Sharma</p>
                        <p>15M Views | 23M Likes</p>
                    </div>
                </div>
            </div>
            <div className="video-card">
                <a href=""><img src="../assets/thumbnails/thumbnail.jpg" alt="" className="thumbnail" /></a>
                
                <div className="flex-container">
                    <img src="../assets/channel/channel.jpg" alt="" />
                    <div className="video-info">
                        <a href="">The Kapil Sharma Show | Baisakhi Special | Comedy Circus</a>
                        <p>Kapil Sharma</p>
                        <p>15M Views | 23M Likes</p>
                    </div>
                </div>
            </div>

        </div>

        </div>
        
    )
}

export {VideoContent}