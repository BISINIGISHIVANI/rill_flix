import { VideoCard } from "../../componentes";
import "./video-list.css";
import {Navbar,Sidebar} from "../../componentes";
import { useSearchFilter} from "../../hooks";
import {GetSearchData} from "../../hooks/utils/index"
import { useVideos } from "../../hooks/context/video-context";
import { FilterLabel } from "../../helpers/filter-label";
import { useState } from "react";
import { VideoLoader } from "../../componentes/video-loader/video-loader";
export default function VideoList(){
    const {videos,isLoading}=useVideos();
    const [isLabel,setIsLabel]=useState("All")
    const {videoState:{searchQuery}}=useSearchFilter();
    const searchData=GetSearchData(videos,searchQuery);
    const getFilterLabel=FilterLabel(searchData,isLabel);
    return (
      <div>
        <Navbar />
        <div className="flex-row">
          <div>
            <Sidebar />
          </div>
          <div className="video-list-set bd-lft">
            <div className="chips-bar flex-row flex-wrap gap padding-md">
              <div
                onClick={() => setIsLabel("All")}
                className={`chips ${isLabel === "All" ? "chip-active" : ""}`}
              >
                <p>All</p>
              </div>
              <div
                onClick={() => setIsLabel("Movie Trailers")}
                className={`${
                  isLabel === "Movie Trailers" ? "chip-active" : ""
                }`}
              >
                <p>Movies</p>
              </div>
              <div
                onClick={() => setIsLabel("Short film")}
                className={`${isLabel === "Short film" ? "chip-active" : ""}`}
              >
                <p>Short film</p>
              </div>
              <div
                onClick={() => setIsLabel("Animation")}
                className={`${isLabel === "Animation" ? "chip-active" : ""}`}
              >
                <p>Animation</p>
              </div>
              <div
                onClick={() => setIsLabel("Motivational")}
                className={`${isLabel === "Motivational" ? "chip-active" : ""}`}
              >
                <p>Motivational</p>
              </div>
            </div>
            <div className="video-list cursor-pointer">
              { isLoading ? (
                  videos.map((video)=>
                  <VideoLoader key={video._id}/>
                  )
              ):""}
              {getFilterLabel.map((video) =>
                <VideoCard key={video._id} {...video} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
}