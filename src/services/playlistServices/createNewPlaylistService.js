import axios from "axios";
import { toast } from "react-toastify";

export const createNewPlaylistService = async (token, newPlaylistData, playlistDispatch)=>{
    
    try { 
        const response = await axios.post("/api/user/playlists", { playlist: newPlaylistData }, {headers:{authorization: token}});
         console.log(response)
        if(response.status === 201){
            playlistDispatch({type: "CREATE_PLAYLIST", payload: response.data.playlists});
            toast.success("new playlist created")
        }else{
            throw new Error("Can't process the request")
        }

    } catch (error) {
        console.log(error)
    }
}