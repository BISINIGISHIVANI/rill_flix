import React, {useEffect, useState} from "react";
import {avatarIcn} from "../../assests/icons/icon";
import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";
import { useLike } from "../../hooks/context/likes-context";
import { useAuth } from "../../hooks/context/auth-context";
import {addToLike, deleteLiked} from "../../services/likes.services";
import axios from "axios";
import {toast} from "react-toastify"
import { useWatchlater } from "../../hooks/context/watchlater-context";
import {
  addToWatchlaterVideo,
  deleteWatchlaterVideo,
} from "../../services/watchlater.services";
import { useVideos } from "../../hooks/context/video-context";
import { useHistory } from "../../hooks/context/history-context";
import { addToHistory,deleteHistory } from "../../services/history.services";
import { Navbar,VideoCard} from "../../componentes";
import { usePlaylistModal } from "../../hooks/context/playlistModal-context";
export const SingleVideoPage = () => {
  const {videoId} = useParams();
  const [singleVideo, setSingleVideo] = useState({});
  const [isTextOpen, setIsTextOpen] = useState(false);
   const {
     authState: {token},
   } = useAuth();
   const {videos}=useVideos()
   const {
     likeState: {likes},
     likeDispatch,
   } = useLike();
    const {
      watchlaterState: {watchlater},
      watchlaterDispatch,
    } = useWatchlater();
    const {historyState:{history},historyDispatch}=useHistory()
    const {modalDispatch}=usePlaylistModal()
    const playlistHandler=()=>{
        const video = videos.find((item) => item._id ===singleVideo._id);
        modalDispatch({type: "MODAL_OPEN", payload:video});
   }
   const checkLikeHandler = () => {
     return likes.find((item) => item._id ===singleVideo._id);
   };
    const WatchlaterHandler = () => {
      addToWatchlaterVideo(singleVideo, token, watchlaterDispatch);
    };
    const checkWatchlater = () => {
      return watchlater.find((item) => item._id === singleVideo._id);
    };
    const simialrVideo = videos.filter(
      (item) => item.categoryName === singleVideo.categoryName
    );
    const getSimilarCategory = simialrVideo.filter(
      (item) => item.title !== singleVideo.title
    );
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        const {
          data: {video},
        } = response;
        setSingleVideo(video);
        const checkHistoryArr=history.find((item)=>item._id===videoId)
        if(checkHistoryArr){
            deleteHistory(checkHistoryArr._id,token,historyDispatch)
            addToHistory(checkHistoryArr,token,historyDispatch)
        }else if(token){
          addToHistory(video,token,historyDispatch)
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [videoId,history,historyDispatch,token]);
  return (
    <div>
      <Navbar />
      <div className="flex-row padding-md flex-wrap gap-md">
        <div className=" single-video-container flex-col">
          <ReactPlayer
            controls={true}
            playing={true}
            volume={0.5}
            width="100%"
            url={`https://www.youtube.com/embed/${singleVideo.videoLink}?autoplay=0`}
          ></ReactPlayer>
          <div className="flex-row flex-space-between flex-wrap flex-center">
            <div className="flex-row gap">
              <img className="img-avtar" src={avatarIcn} alt="profile" />
              <div className="">
                <h3>{singleVideo.title}</h3>
                <span>{singleVideo.views} Views...</span>
                <span>Published {singleVideo.publishedYear}</span>
              </div>
            </div>
            <div className="flex-row gap-md video-icn">
              <label className="hover-white cursor-pointer flex-col">
                {likes.find((item) => item._id === singleVideo._id) ? (
                  <i
                    onClick={() => {
                      deleteLiked(videoId, token, likeDispatch);
                      toast.info(`${singleVideo.title} deleted successfully`);
                    }}
                    className="fa-solid fa-thumbs-up like fa-2x"
                  ></i>
                ) : (
                  <i
                    onClick={() => {
                      addToLike(singleVideo, token, likeDispatch);
                      toast.success(`${singleVideo.title} added to likes`);
                    }}
                    className="fa-regular fa-thumbs-up fa-2x"
                  ></i>
                )}
                {checkLikeHandler(singleVideo._id) ? "Liked" : "Like"}
              </label>

              <label
                className="flex-col cursor-pointer"
                onClick={()=>playlistHandler()}
              >
              <i className="fa-solid fa-folder-plus fa-2x"></i>
                    Save
              </label>
              <label className="cursor-pointer flex-col">
                {checkWatchlater() ? (
                  <i
                    onClick={() => {
                      deleteWatchlaterVideo(
                        singleVideo._id,
                        token,
                        watchlaterDispatch
                      );
                      toast.info(`${singleVideo.title} deleted successfully`);
                    }}
                    className="fa-solid fa-bookmark fa-2x playlist"
                  ></i>
                ) : (
                  <i
                    onClick={() => {
                      WatchlaterHandler(singleVideo._id);
                      toast.success(`${singleVideo.title} added watchlater`);
                    }}
                    className="fa-regular fa-bookmark fa-2x playlist"
                  ></i>
                )}
                <label>WatchLater</label>
              </label>
            </div>
          </div>
          <div className="single-video-container padding-md">
            <h2>{singleVideo.title}</h2>
            <span
              className="cursor-pointer"
              onClick={() => setIsTextOpen(!isTextOpen)}
            >
              info:{singleVideo.subtitle} {isTextOpen ? "" : "...more"}{" "}
            </span>
            <p>{isTextOpen ? `${singleVideo.description}` : ""}</p>
          </div>
        </div>
        <div>
          {/* <div className="sample-video-note flex-col flex-space-between">
            <div></div>
            <input
              className="video-note-input"
              type="text"
              placeholder="write notes"
            />
          </div> */}
          <div className="simiar-card-mg">
            <h2 className="padding-md">watch simialr videos</h2>
            {getSimilarCategory.map((video) => (
              <VideoCard key={video._id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
