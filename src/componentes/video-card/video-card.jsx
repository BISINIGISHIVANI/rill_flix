import {avatarIcn} from "../../assests/icons/icon";
import "./video-card.css";
import {useState} from "react";
import {useAuth} from "../../hooks/context/auth-context";
import {useLike} from "../../hooks/context/likes-context";
import {useNavigate} from "react-router";
import {useVideos} from "../../hooks/context/video-context";
import {addToLike, deleteLiked} from "../../services/likes.services";
import {
  addToWatchlaterVideo,
  deleteWatchlaterVideo,
} from "../../services/watchlater.services";
import {useWatchlater} from "../../hooks/context/watchlater-context";
import {toast} from "react-toastify";
export default function VideoCard(props) {
  const {_id, thumbNail, title, videoSpan, subtitle, views, publishedYear} =
    props;
  const [isMore, setIsMore] = useState(false);
  const BtnMoreToggle = () => {
    setIsMore((value) => !value);
  };
  const {videos} = useVideos();
  const {
    authState: {token},
  } = useAuth();
  const {
    likeState: {likes},
    likeDispatch,
  } = useLike();
  const {
    watchlaterState: {watchlater},
    watchlaterDispatch,
  } = useWatchlater();
  const navigate = useNavigate();

  const likeVideoHandler = () => {
    if (token) {
      const selectedVideo = videos.find((item) => item._id === _id);
      addToLike(selectedVideo, token, likeDispatch);
      toast.success(`${selectedVideo.title} added to like`);
    } else {
      navigate("/signin");
      toast.warn("kindly,login to  account like video");
    }
  };
  const checkLikeHandler = () => {
    return likes.find((item) => item._id === _id);
  };
  const checkLikeAction = (_id) => {
    return checkLikeHandler(_id)
      ? deleteLiked(_id, token, likeDispatch)
      : likeVideoHandler(_id);
  };
  const WatchlaterHandler = () => {
    if (token) {
      const selectVideo = videos.find((item) => item._id === _id);
      addToWatchlaterVideo(selectVideo, token, watchlaterDispatch);
      toast.success(`${selectVideo.title} added to watchlater`);
    } else {
      navigate("/signin");
      toast.warn("kindly,login to  account");
    }
  };
  const checkWatchlater = () => {
    return watchlater.find((item) => item._id === _id);
  };
  const checkWatchlaterAction = (_id) => {
    return checkWatchlater(_id)
      ? deleteWatchlaterVideo(_id, token, watchlaterDispatch)
      : WatchlaterHandler(_id);
  };
  const navigateSingleVideo = () => {
    if (token) {
      navigate(`/video/${_id}`);
    } else {
      navigate("/signin");
      toast.warn("kindly,login to  account");
    }
  };
  return (
    <div className="video-card-set" key={_id}>
      <div
        onClick={navigateSingleVideo}
        className="videocard-img position-relative"
      >
        <img src={thumbNail} alt="video" />
        <div className="position-absolute video-timer">
          <span>{videoSpan}</span>
        </div>
      </div>
      <div>
        <div className="flex-row flex-center flex-space-between">
          <div>
            <img className="video-profile" src={avatarIcn} alt="icons" />
          </div>
          <div className="views-date-info flex-col">
            <div className="flex-row flex-center gap-md">
              <div>
                <h3>{title}</h3>
                <span>{subtitle}</span>
                <div>
                  <span>{views} Views</span>
                  <span>.{publishedYear}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="position-relative more-icn">
              <i
                onClick={BtnMoreToggle}
                className="fa-solid fa-ellipsis-vertical"
              ></i>
            </div>
            {isMore && (
              <div
                onClick={BtnMoreToggle}
                className="position-absolute flex-col gap more-box"
              >
                <label
                  className="hover-white"
                  onClick={() => checkLikeAction(_id)}
                >
                  <i className="fa-solid fa-thumbs-up like "></i>
                  {checkLikeHandler(_id) ? "Liked" : "Like"}
                </label>
                <label onClick={() => checkWatchlaterAction(_id)}>
                  <i className="fa-solid fa-bookmark playlist"></i>
                  {checkWatchlater(_id) ? (
                    <label>
                      WatchLater <i className="fa-solid fa-check"></i>
                    </label>
                  ) : (
                    "WatchLater"
                  )}{" "}
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
