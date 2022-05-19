import { HorizontalVideoCard, Navbar, SideNav } from "../../Components";
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
          <div className="playlist-left-content">
            <div className="card ecommerce-card">
              <div className="card-with-text-overlay">
                {likeData.length > 0 ? (
                  <figure className="card-header">
                    <img src={likeData[0].videoThumbnail} alt="" />
                  </figure>
                ) : (
                  <figure className="card-header">
                    <img src="./assets/defaultImg.jpg" alt="default-img" />
                  </figure>
                )}
              </div>
              <div className="text-overlay lg-text">
                Videos({likeData.length})
              </div>
            </div>

            <div className="playlist-info">
              <h3 className="playlist-name">Liked Videos</h3>
              <p className="playlist-updated-time">Updated on May 10,2022</p>
            </div>

            <div className="divider"></div>

            <div className="video-creator">
              <img
                src="https://lh3.googleusercontent.com/ogw/ADea4I4uUERI95xonyxzL3nGOOMdNrpjNtGEXURXLFL0=s32-c-mo"
                alt=""
              />
              <div className="video-channel">
                <p className="channel-name md-text">Priyanka Prajapati</p>
                <span className="channel-subscribers">50K subscribers</span>
              </div>
            </div>
          </div>

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
