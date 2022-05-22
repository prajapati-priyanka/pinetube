import { useParams } from "react-router-dom";
import {
  ContentSidebar,
  HorizontalVideoCard,
  Navbar,
  SideNav,
} from "../../Components";
import { usePlaylist } from "../../context";
import "./SinglePlaylistPage.css";

const SinglePlaylistPage = () => {
  const { playlistID } = useParams();
  const {
    playlistState: { playlists },
  } = usePlaylist();

  const currentPlaylist = playlists.find((item) => item._id === playlistID);

  return (
    <>
      <Navbar />
      <SideNav />
      <div className="main-container playlist-page">
        <div className="row">
          <ContentSidebar
            videoData={currentPlaylist.videos}
            playlistTitle={currentPlaylist.title}
          />

          <div className="playlist-right-content">
            {currentPlaylist.videos.length < 1 ? (
              <div className="lg-text text-center">
                No Video in the {currentPlaylist.title} playlist
              </div>
            ) : (
              currentPlaylist.videos.map((video) => (
                <HorizontalVideoCard
                  key={video._id}
                  video={video}
                  playlistID={playlistID}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { SinglePlaylistPage };
