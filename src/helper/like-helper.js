import { addToLikePage,removeFromLikePage } from "../services";

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