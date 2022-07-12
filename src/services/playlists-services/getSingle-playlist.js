import axios from "axios";

const getSinglePlaylist = async (token, setplaylistVideo, playlistId) => {
  try {
    const response = await axios.get(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token }
    });
    if (response.status === 200) {
      setplaylistVideo(response.data.playlist);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export { getSinglePlaylist };
