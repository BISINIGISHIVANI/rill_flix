import {useNavigate} from "react-router";
import {useAuth} from "../../hooks/context/auth-context";
import {usePlaylists} from "../../hooks/context/playlists-context";
import {
  getSinglePlaylist,
  deleteVideoFromPlaylist,
} from "../../services/playlists-services";
import {toast} from "react-toastify";
export const PlaylistVideoCard = ({
  _id,
  thumbNail,
  videoSpan,
  title,
  subtitle,
  playlistId,
  setplaylistVideo,
}) => {
  const {
    authState: {token},
  } = useAuth();
  const navigate = useNavigate();
  const {playlistDispatch} = usePlaylists();
  const deleteVideoHandler = () => {
    deleteVideoFromPlaylist(playlistId, _id, token, playlistDispatch);
    getSinglePlaylist(token, setplaylistVideo, playlistId);
    toast.info(`${title} deleted from playlist`);
  };
  return (
    <div className="flex-col gap-md mg-sm">
      <div className="flex-row flex-wrap place-items gap bd-sm">
        <div
          className="position-relative cursor-pointer card-responsive "
          onClick={() => {
            navigate(`/video/${_id}`);
          }}
        >
          <img className="img-responsive" src={thumbNail} alt="video" />
          <div className="position-absolute video-timer">
            <span>{videoSpan}</span>
          </div>
        </div>
        <div>
          <div className="flex-row flex-wrap card-width flex-space-between gap-md">
            <div className="flex-col flex-center cursor-pointer">
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
            </div>
            <div>
              <div
                onClick={() => deleteVideoHandler()}
                className="position-relative cursor-pointer"
              >
                <i className="fa-solid fa-trash padding-md"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
