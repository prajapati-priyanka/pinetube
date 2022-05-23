import axios from "axios"
import { toast } from "react-toastify";
export const addToWatchLaterPage = async (videos,token,watchLaterDispatch)=>{
    try {
        const response = await axios.post("/api/user/watchlater", {video: videos},  {
            headers: {
              authorization: token,
            },
          })
          if (response.status === 201) {
            watchLaterDispatch({ type: "ADD_TO_WATCH_LATER", payload: response.data.watchlater });
            toast.success("Added to Watch Later Page");
          }else{
            throw new Error("Can't process the request")
          }
    } catch (error) {
        console.log(error)
    }
}
