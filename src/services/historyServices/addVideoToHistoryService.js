import axios from "axios";
import { toast } from "react-toastify";

export const addVideoToHistoryService = async(token, singleVideoData, historyDispatch) =>{
    try {
        const response = await axios.post("/api/user/history", {video:singleVideoData}, {headers:{authorization:token}})
        if(response.status === 201){
            historyDispatch({type: "ADD_VIDEO", payload: response.data.history});
            toast.success("Video added to history")
        }else{
            throw new Error("Can't Process request")
        }
    } catch (error) {
        console.log(error)
    }
}
