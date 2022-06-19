import { useAuth } from "../../hooks/context/auth-context";
import { useWatchlater } from "../../hooks/context/watchlater-context";
import { deleteWatchlaterVideo } from "../../services/watchlater.services";
import { useNavigate } from "react-router";
export const WatchLaterCard=({_id,thumbNail,videoSpan,title,subtitle})=>{
    const {authState:{token}}=useAuth();
    const {watchlaterDispatch}=useWatchlater();
    const navigate=useNavigate()
    const deleteFromWatchlterHandler = () => {
        deleteWatchlaterVideo(_id,token, watchlaterDispatch)
    }
    return (
      <div className="flex-col gap-md mg-sm">
        <div className="flex-row flex-wrap place-items gap bd-sm">
          <div
            onClick={() => navigate(`/video/${_id}`)}
            className="position-relative cursor-pointer card-responsive"
          >
            <img className="img-responsive" src={thumbNail} alt="video" />
            <div className="position-absolute video-timer">
              <span>{videoSpan}</span>
            </div>
          </div>
          <div className="flex-row flex-wrap card-width flex-space-between gap-md">
            <div className="flex-col flex-center">
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
            </div>
            <div>
              <div className="position-relative cursor-pointer">
                <i
                  onClick={deleteFromWatchlterHandler}
                  className="fa-solid fa-trash padding-md"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}