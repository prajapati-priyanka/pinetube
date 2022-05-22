import axios from "axios";
import { toast } from "react-toastify";

export const deletePlaylistService = async (
  token,
  playlist,
  playlistDispatch
) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlist._id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      playlistDispatch({
        type: "DELETE_PLAYLIST",
        payload: response.data.playlists,
      });
      toast.success(`${playlist.title} is successfully deleted`);
    } else {
      throw new Error("Can't process the request");
    }
  } catch (error) {
    console.log(error);
  }
};
