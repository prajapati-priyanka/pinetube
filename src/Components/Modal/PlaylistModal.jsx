import "./PlaylistModal.css";
import { BsXLg } from "react-icons/bs";
import { useState } from "react";
import { MdPlaylistAdd } from "react-icons/md";
import { useAuth, usePlaylist } from "../../context";
import { createNewPlaylistService,addVideoToPlaylist, removeVideoFromPlaylist } from "../../services"

const PlaylistModal = ({ setIsPlaylistModalVisible, playlistVideo }) => {
  const [isCreatePlaylistInputVisible, setIsCreatePlaylistInputVisible] =
    useState(false);
  const [newPlaylistData, setNewPlaylistData] = useState({
    title: "",
    description: "Hello World",
  });

  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylist();
  const { authState } = useAuth();

  const token = authState.token || localStorage.getItem("token");

  const createPlaylistHandler = () => {
    if (!isCreatePlaylistInputVisible) {
      setIsCreatePlaylistInputVisible(true);
    }
    if (
      newPlaylistData.title !== "" &&
      playlists.findIndex(
        (item) => (item.title !== newPlaylistData.title) === -1
      )
    ) {
      createNewPlaylistService(token, newPlaylistData, playlistDispatch);
    }

    setNewPlaylistData({ title: "", description: "" });
  };

  const handlePlaylistInputChange = (e) => {
    setNewPlaylistData({ ...newPlaylistData, title: e.target.value });
  };

  const checkIsVideoInPlaylist = (playlistId) => {
    const isPlaylistExist = playlists.find((item) => item._id === playlistId);

    if (isPlaylistExist) {
      return isPlaylistExist.videos.some(
        (item) => item._id === playlistVideo._id
      );
    } else {
      return false;
    }
  };

  const CheckPlaylistInputHandler = (e) => {
    const { checked, id } = e.target;

    if (checked) {
      addVideoToPlaylist(token, id, playlistVideo, playlistDispatch);
    } else {
      removeVideoFromPlaylist(token, id, playlistVideo, playlistDispatch);
    }
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <header className="playlist-modal-header flex-container">
          <h4>Save to..</h4>
          <button
            className="btn btn-cross"
            onClick={() => setIsPlaylistModalVisible(false)}
          >
            <BsXLg />
          </button>
        </header>
        <div className="divider"></div>

        <section className="playlist-modal-body">
          <div className="input-container">
            <input type="checkbox" id="watch-later" className="input-check"/>
            <label htmlFor="watch-later" className="md-text">
              Watch Later
            </label>
          </div>

          {playlists.length > 0
            ? playlists.map((item) => (
                <div key={item._id} className="input-container">
                  <input
                    type="checkbox"
                    className="input-check"
                    id={item._id}
                    checked={checkIsVideoInPlaylist(item._id)}
                    onChange={CheckPlaylistInputHandler}
                  />
                  <label htmlFor={item._id} className="md-text">
                    {item.title}
                  </label>
                </div>
              ))
            : null}
        </section>

        <div className="divider"></div>

        <footer className="create-playlist-footer">
          {isCreatePlaylistInputVisible ? (
            <input
              type="text"
              className="create-playlist-input"
              placeholder="My Playlist"
              value={newPlaylistData.title}
              onChange={handlePlaylistInputChange}
            />
          ) : null}

          <button
            className="btn flex-container md-text create-playlist-btn"
            onClick={createPlaylistHandler}
          >
            <MdPlaylistAdd />
            <span>Create Playlist</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export { PlaylistModal };
