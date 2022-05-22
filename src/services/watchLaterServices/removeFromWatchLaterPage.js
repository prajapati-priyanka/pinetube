import axios from "axios";
import { toast } from "react-toastify";

export const removeFromWatchLaterPage = async (videos,token,watchLaterDispatch) =>{
try {
    const response = await axios.delete(`/api/user/watchlater/${videos._id}`, {headers:{
        authorization: token
    }});
   
 if(response.status === 200){
        watchLaterDispatch({type: "REMOVE_FROM_WATCH_LATER", payload: response.data.watchlater});
        toast.error("Removed from Watch Later Page")
    }else{
        throw new Error("Can't process the request")
    }
} catch (error) {
    console.log(error)
}
}
