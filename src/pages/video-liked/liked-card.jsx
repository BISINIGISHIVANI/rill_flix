import {useAuth} from "../../hooks/context/auth-context";
import {useLike} from "../../hooks/context/likes-context";
import {deleteLiked} from "../../services/likes.services";
import { useNavigate } from "react-router";
import{ toast} from "react-toastify"
export const LikedCard = ({_id, thumbNail, videoSpan, title, subtitle}) => {
  const {
    authState: {token},
  } = useAuth();
  const navigate=useNavigate()
  const {likeDispatch} = useLike();
  const unlikeHandler = () => {
    deleteLiked(_id, token, likeDispatch);
    toast.error("removed from likes")
  };
  return (
    <div className="flex-col gap-md mg-sm">
      <div className="flex-row flex-wrap place-items gap bd-sm">
        <div
          className="position-relative cursor-pointer card-responsive "
          onClick={() => navigate(`/video/${_id}`)}>
          <img className="img-responsive" src={thumbNail} alt="video" />
          <div className="position-absolute video-timer">
            <span>{videoSpan}</span>
          </div>
        </div>
        <div>
          <div className="flex-row flex-wrap card-width flex-space-between gap-md">
            <div className="flex-col flex-center">
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
            </div>
            <div>
              <div
                onClick={unlikeHandler}
                className="position-relative cursor-pointer">
                <i className="fa-solid fa-trash padding-md"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
