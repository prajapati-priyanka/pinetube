import { ContentSidebar, HorizontalVideoCard, Navbar, SideNav } from "../../Components";
import { useLike } from "../../context";

const Liked = () => {
  const {
    likeState: { likeData },
  } = useLike();
  return (
    <>
      <Navbar />
      <SideNav />
      <div className="main-container playlist-page">
        <div className="row">
          <ContentSidebar videoData = {likeData}/>

          <div className="playlist-right-content">
            {likeData.length < 1 ? (
              <div className="lg-text text-center">
                No Data in the liked page
              </div>
            ) : (
              likeData.map((likeVideo) => (
                <HorizontalVideoCard
                  key={likeVideo._id}
                  likeVideo={likeVideo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { Liked };
