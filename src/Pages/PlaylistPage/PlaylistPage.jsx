import "./PlaylistPage.css";
import { MdPlaylistAdd } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { Navbar, SideNav } from "../../Components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, usePlaylist } from "../../context";
import { deletePlaylistService } from "../../services";

const PlaylistPage = () => {
  const navigate = useNavigate();
  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylist();
  const {
    authState: { token },
  } = useAuth();

  const deletePlaylistHandler = (playlistId) => {
    deletePlaylistService(token, playlistId, playlistDispatch);
  };

  return (
    <>
      <Navbar />
      <SideNav />

      <div className="main-container">
        <h3 className="page-title">Playlist</h3>

        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <div
              key={playlist._id}
              className="playlist flex-container"
              onClick={() => navigate(`/playlists/${playlist._id}`)}
            >
              <MdPlaylistAdd className="playlist-icon x-lg-text" />
              <div>
                <p className="playlist-name lg-text">{playlist.title}</p>
                <p className="playlist-name text-muted">
                  {playlist.videos.length}{" "}
                  {playlist.videos.length === 1 ? "Video" : "Videos"}
                </p>
              </div>
              <button
                className="btn trash-icon lg-text"
                onClick={() => deletePlaylistHandler(playlist)}
              >
                <BsTrash />
              </button>
            </div>
          ))
        ) : (
          <Link to="/explore">
            <button className="btn btn-primary">Explore</button>
          </Link>
        )}
      </div>
    </>
  );
};

export { PlaylistPage };
