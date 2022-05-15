import "./PlaylistModal.css";
import { BsXLg } from "react-icons/bs";
import { useState } from "react";
import { MdPlaylistAdd } from "react-icons/md";

const PlaylistModal = ({ setIsPlaylistModalVisible }) => {
  const [isCreatePlaylistVisible, setIsCreatePlaylistVisible] = useState(false);

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
            <input type="checkbox" id="watch-later" />
            <label htmlFor="watch-later" className="md-text">
              Watch Later
            </label>
          </div>
        </section>

        <div className="divider"></div>

        <footer className="create-playlist-footer">
          {isCreatePlaylistVisible ? (
            <input
              type="text"
              className="create-playlist-input"
              placeholder="My Playlist"
            />
          ) : null}

          <button
            className="btn flex-container md-text create-playlist-btn"
            onClick={() => setIsCreatePlaylistVisible(true)}
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
