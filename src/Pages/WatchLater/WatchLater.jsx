import {
  ContentSidebar,
  HorizontalVideoCard,
  Navbar,
  SideNav,
} from "../../Components";
import { useWatchLater } from "../../context";

const WatchLater = () => {
  const {
    watchLaterState: { watchLater },
  } = useWatchLater();
  return (
    <>
      <Navbar />
      <SideNav />
      <div className="main-container playlist-page">
        <div className="row">
          <ContentSidebar videoData={watchLater} />

          <div className="playlist-right-content">
            {watchLater.length < 1 ? (
              <div className="lg-text text-center">
                No Data in the watchLater page
              </div>
            ) : (
              watchLater.map((watchLaterVideo) => (
                <HorizontalVideoCard
                  key={watchLaterVideo._id}
                  video={watchLaterVideo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { WatchLater };
