import React, {useEffect, useState} from "react";
import {avatarIcn} from "../../assests/icons/icon";
import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";
import axios from "axios";
import { Navbar} from "../../componentes";
export const SingleVideoPage = () => {
  const {videoId} = useParams();
  const [video, setVideo] = useState({});
  const [isTextOpen, setIsTextOpen] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        const {
          data: {video},
        } = response;
        setVideo(video);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [videoId]);
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
            url={`https://www.youtube.com/embed/${video.videoLink}?autoplay=0`}
          ></ReactPlayer>
          <div className="flex-row flex-space-between flex-wrap flex-center">
            <div className="flex-row gap">
              <img className="img-avtar" src={avatarIcn} alt="profile" />

              <div className="">
                <h3>{video.title}</h3>
                <span>{video.views} Views...</span>
                <span>Published {video.publishedYear}</span>
              </div>
            </div>
            <div className="flex-row gap-md video-icn">
              <label className="flex-col">
                <i className="fa-solid fa-thumbs-up like fa-2x cursor-pointer"></i>
                Like
              </label>
              <label className="flex-col">
                <i className="fa-solid fa-folder-plus fa-2x"></i>
                Save
              </label>
              <label className="flex-col">
                <i className="fa-solid fa-bookmark fa-2x"></i>
                <label>Bookmark</label>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="sample-video-note flex-col flex-space-between">
            <div></div>
            <input
              className="video-note-input"
              type="text"
              placeholder="write notes"
            />
          </div>
        </div>
      </div>
      <div className="single-video-container padding-md">
        <h2>{video.title}</h2>
        <span
          className="cursor-pointer"
          onClick={() => setIsTextOpen(!isTextOpen)}
        >
          info:{video.subtitle} {isTextOpen ? "" : "...more"}{" "}
        </span>
        <p>{isTextOpen ? `${video.description}` : ""}</p>
      </div>
    </div>
  );
};
