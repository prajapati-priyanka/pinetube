const getNewPlaylist = (playlistId, playlists, playlistData) => {
  return playlists.reduce(
    (acc, curr) =>
      curr._id === playlistId ? [...acc, playlistData] : [...acc, curr],
    []
  );
};

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlists: action.payload,
      };
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlists: getNewPlaylist(
          action.payload.playlistId,
          state.playlists,
          action.payload.playlistData
        ),
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlists: getNewPlaylist(
          action.payload.playlistId,
          state.playlists,
          action.payload.playlistData
        ),
      };
    case "DELETE_PLAYLIST":
      return {
        playlists: action.payload,
      };
    case "DELETE_FROM_SINGLE_PLAYLIST":
      return {
        playlists: state.playlists.map((item) =>
          item.title === action.payload.title ? action.payload : item
        ),
      };

    default:
      return state;
  }
};
