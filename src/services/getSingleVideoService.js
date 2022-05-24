import axios from "axios";

export const getSingleVideoService = async (videoID,setSingleVideoData)=>{
    try {
        const response = await axios.get(`/api/video/${videoID}`);
        // console.log(response)
        if(response.status === 200){
         setSingleVideoData(response.data.video)
        }else{
            throw new Error("Can't process the request")
        }
    } catch (error) {
        console.log(error)
    }
}