import axios from "axios";
import { toast } from "react-toastify";

export const deleteVideoFromSinglePlaylistPage = async (token, playlistId, videoId, playlistDispatch) =>{
  try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {headers: {authorization : token}});
   
    if(response.status === 200){
        playlistDispatch({type: "DELETE_FROM_SINGLE_PLAYLIST", payload: response.data.playlist})
        toast.error("Video removed from playlist")
    }else{
        throw new Error("Can't process request")
    }
  } catch (error) {
      console.log(error)
  }
}