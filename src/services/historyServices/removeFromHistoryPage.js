import axios from "axios";
import { toast } from "react-toastify";

export const removeFromHistoryPage = async (videos,token,historyDispatch) =>{
try {
    const response = await axios.delete(`/api/user/history/${videos._id}`, {headers:{
        authorization: token
    }});
   
 if(response.status === 200){
        historyDispatch({type: "REMOVE_FROM_HISTORY", payload: response.data.history});
        toast.error("Removed from History Page")
    }else{
        throw new Error("Can't process the request")
    }
} catch (error) {
    console.log(error)
}
}
