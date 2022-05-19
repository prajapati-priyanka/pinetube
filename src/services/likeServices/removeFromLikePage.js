import axios from "axios";
import { toast } from "react-toastify";

export const removeFromLikePage = async (videos,token,likeDispatch) =>{
try {
    const response = await axios.delete(`/api/user/likes/${videos._id}`, {headers:{
        authorization: token
    }});
   
 if(response.status === 200){
        likeDispatch({type: "DELETE_FROM_LIKE", payload: response.data.likes});
        toast.error("Removed from Liked Page")
    }else{
        throw new Error("Can't process the request")
    }
} catch (error) {
    console.log(error)
}
}
