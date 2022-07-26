import "./PlaylistModal.css";
import { BsXLg } from "react-icons/bs";
import { useState } from "react";
import { MdPlaylistAdd } from "react-icons/md";
import { useAuth, usePlaylist, useWatchLater } from "../../context";
import {
  createNewPlaylistService,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from "../../services";
import { checkItemInArrayOfObject } from "../../helper/utility-helper";
import { toggleWatchLaterHandler } from "../../helper/watchLater-helper";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { authState } = useAuth();
  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();

  const token = authState.token || localStorage.getItem("token");

  const createPlaylistHandler = () => {
    if (!isCreatePlaylistInputVisible) {
      setIsCreatePlaylistInputVisible(true);
    }
    if (
      newPlaylistData.title.trim() !== "" &&
      playlists.findIndex((item) => item.title === newPlaylistData.title) === -1
    ) {
      createNewPlaylistService(token, newPlaylistData, playlistDispatch);
    }

    setNewPlaylistData({ title: "", description: "" });
  };

  const handlePlaylistInputChange = (e) => {
    setNewPlaylistData({ ...newPlaylistData, title: e.target.value });
  };

  const checkIsVideoInPlaylist = (_id) => {
    const playlist = playlists.find((item) => item._id === _id);
    return playlist.videos.some((item) => item._id === playlistVideo._id);
  };

  const CheckPlaylistInputHandler = (_id) => {
    if (checkIsVideoInPlaylist(_id)) {
      removeVideoFromPlaylist(token, _id, playlistVideo, playlistDispatch);
    } else {
      addVideoToPlaylist(token, _id, playlistVideo, playlistDispatch);
    }
  };

  const isVideoInWatchLaterPage = checkItemInArrayOfObject(
    watchLater,
    playlistVideo
  );

  const watchLaterInputHandler = () => {
    toggleWatchLaterHandler(
      token,
      watchLaterDispatch,
      isVideoInWatchLaterPage,
      navigate,
      playlistVideo
    );
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
            <input
              type="checkbox"
              id="watch-later"
              className="input-check"
              checked={isVideoInWatchLaterPage ? true : false}
              onChange={watchLaterInputHandler}
            />
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
                    id={item.title}
                    checked={checkIsVideoInPlaylist(item._id)}
                    onChange={() => CheckPlaylistInputHandler(item._id)}
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
