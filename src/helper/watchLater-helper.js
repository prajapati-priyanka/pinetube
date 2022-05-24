import { addToWatchLaterPage,removeFromWatchLaterPage } from "../services";

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