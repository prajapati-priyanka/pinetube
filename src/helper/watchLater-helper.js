import { addToWatchLaterPage } from "../services/watchLaterServices/addToWatchLaterPage"
import { removeFromWatchLaterPage } from "../services/watchLaterServices/removeFromWatchLaterPage"

export const toggleWatchLaterHandler = (token, watchLaterDispatch, isVideoInWatchLaterPage,navigate, videos) =>{

    if(token){
        if(isVideoInWatchLaterPage){
            removeFromWatchLaterPage(videos,token,watchLaterDispatch)
        }else{
            addToWatchLaterPage(videos,token, watchLaterDispatch)
        }
    }else{
        navigate("/login")
    }
}