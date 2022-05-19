import { addToLikePage } from "../services/likeServices/addToLikePage"
import { removeFromLikePage } from "../services/likeServices/removeFromLikePage"


export const toggleLikeHandler = (token,likeDispatch, isVideoInLikePage, navigate, videos)=>{

    if(token){
        if(isVideoInLikePage){
            removeFromLikePage(videos,token,likeDispatch)
        }else{
            addToLikePage(videos,token,likeDispatch)
        }
    }else{
        navigate("/login")
    }
}