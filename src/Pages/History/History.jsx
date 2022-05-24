import { HorizontalVideoCard, Navbar, SideNav, ContentSidebar } from "../../Components"
import { useHistory } from "../../context"

const History = () =>{
  const {historyState: {history}} = useHistory();
    return(
        <>
        <Navbar />
        <SideNav />
        <div className="main-container playlist-page">
        <div className="row">
          <ContentSidebar videoData = {history}/>

          <div className="playlist-right-content">
            {history.length < 1 ? (
              <div className="lg-text text-center">
                No Data in the history page
              </div>
            ) : (
              history.map((likeVideo) => (
                <HorizontalVideoCard
                  key={likeVideo._id}
                  video={likeVideo}
                />
              ))
            )}
          </div>
        </div>
      </div>
        </>
    )
}

export {History}