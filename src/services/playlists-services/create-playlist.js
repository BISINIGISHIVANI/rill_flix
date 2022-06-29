import axios from "axios";
import { toast } from "react-toastify";
const createPlaylist = async (playlist, playlistDispatch, token, video) => {
  const response = await axios.post(
    "/api/user/playlists",
    { playlist },
    { headers: { authorization: token } }
  );
  try {
    if (response.status === 201) {
      playlistDispatch({
        type: "NEW_PLAYLIST_NAME",
        payload: response.data.playlists
      });
      toast.success(`${playlist.title} playlist created`);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export { createPlaylist };
