import axios from "axios";
import { toast } from "react-toastify";

export const removeVideoFromPlaylist = async (
  token,
  playlistId,
  video,
  playlistDispatch
) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${video._id}`,
      { headers: { authorization: token } }
    );

    if (response.status === 200) {
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: response.data.playlist,
      });
      toast.error("Video removed from playlist");
    }
  } catch (error) {
    console.log(error);
  }
};
