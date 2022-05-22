import axios from "axios";
import { toast } from "react-toastify";

export const getVideoServices = async (setAllVideo) => {
  try {
    const response = await axios.get("/api/videos");
    if (response.status === 200) {
      setAllVideo(response.data.videos);
    } else {
      throw new Error("Request Failed, Can't get Data");
    }
  } catch (error) {
    toast.error(error.message);
    console.log(error);
  }
};
