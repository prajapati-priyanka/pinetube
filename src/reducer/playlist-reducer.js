export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlists: action.payload,
      };
    case "ADD_TO_PLAYLIST":
      return {
        playlists: state.playlists.map((item) =>
          item.title === action.payload.title ? action.payload : item
        ),
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        playlists: state.playlists.map((item) =>
          item.title === action.payload.title ? action.payload : item
        ),
      };

    default:
      return state;
  }
};
