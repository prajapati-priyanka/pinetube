import axios from "axios";
import { toast } from "react-toastify";
export const addVideoToPlaylist = async (
  token,
  playlistId,
  videos,
  playlistDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video: videos },
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (response.status === 201) {
      playlistDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: {
          playlistId: response.data.playlist._id,
          playlistData: response.data.playlist,
        },
      });
      toast.success("Video Added To Playlist");
    } else {
      throw new Error("Can't process the request");
    }
  } catch (error) {
    console.log(error);
  }
};
