import { createContext,useContext,useReducer } from "react";
import { playlistReducer } from "../reducer/playlist-reducer";

const PlaylistContext = createContext();

const playlistInitialState={
    playlists:[]
}

const PlaylistProvider = ({children}) =>{
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, playlistInitialState)
    return <PlaylistContext.Provider value={{playlistState, playlistDispatch}}>
        {children}
    </PlaylistContext.Provider>
}

const usePlaylist = () => useContext(PlaylistContext);

export {PlaylistProvider, usePlaylist}