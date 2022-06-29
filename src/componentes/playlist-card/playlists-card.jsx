import { useAuth } from "../../hooks/context/auth-context";
import { usePlaylists } from "../../hooks/context/playlists-context";
import { getPlaylist, deletePlaylist } from "../../services/playlists-services";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const PlaylistsCard = ({ playlists }) => {
  const {
    authState: { token }
  } = useAuth();
  const { playlistDispatch } = usePlaylists();
  useEffect(() => {
    getPlaylist(token, playlistDispatch);
  }, [token, playlistDispatch]);
  const deletePlaylistHandler = (playlistId) => {
    deletePlaylist(playlistId, token, playlistDispatch);
    toast.success(`playlist deleted successfully`);
  };

  const singlePlaylistHandler = (videos) => {
    playlistDispatch({
      type: "VIDEO_TO_SINGLE_PLAYLIST_PAGE",
      payload: videos
    });
  };
  const navigate = useNavigate();
  return (
    <div className="flex-row gap-md flex-space-between flex-wrap">
      {playlists.map((item) => {
        return (
          <section
            className="playlist-container flex-row flex-space-between flex-wrap bd-sm padding-md"
            key={item._id}
          >
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate(`/playlist/${item._id}`);
                singlePlaylistHandler(item._id);
              }}
            >
              <h2>{item.title}</h2>
              <p>{item.videos.length} video</p>
            </div>
            <p>
              <i
                className="fa-solid fa-trash cursor-pointer"
                onClick={() => deletePlaylistHandler(item._id)}
              ></i>
            </p>
          </section>
        );
      })}
    </div>
  );
};
