import axios from "axios";

const addVideoToPlaylists = async (
  playlistId,
  video,
  token,
  playlistDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      playlistDispatch({
        type: "UPDATE_PLAYLIST",
        payload: {
          playlistId: response.data.playlist._id,
          playlistData: response.data.playlist
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export { addVideoToPlaylists };
