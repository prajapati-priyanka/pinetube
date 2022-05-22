import axios from "axios";
import { toast } from "react-toastify";

export const addToLikePage = async (videos, token, likeDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video: videos },
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (response.status === 201) {
      likeDispatch({ type: "ADD_TO_LIKE", payload: response.data.likes });
      toast.success("Added to Liked Page");
    }
  } catch (error) {
    console.log(error);
  }
};
