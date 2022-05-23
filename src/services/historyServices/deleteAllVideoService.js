import axios from "axios";
import { toast } from "react-toastify";

export const deleteAllVideoService = async (token,historyDispatch) =>{
try {
    const response = await axios.delete(`/api/user/history/all`, {headers:{
        authorization: token
    }});

 if(response.status === 200){
        historyDispatch({type: "REMOVE_ALL", payload: response.data.history});
        toast.error("Video History Deleted")
    }else{
        throw new Error("Can't process the request")
    }
} catch (error) {
    console.log(error)
}
}
