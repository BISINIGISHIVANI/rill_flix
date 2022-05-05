import { VideoCard } from "../../componentes";
import "./video-list.css";
import { useState,useEffect } from "react";
import { useSearchFilter} from "../../hooks";
import {GetSearchData} from "../../hooks/utils/index"
import { useVideos } from "../../hooks/context/video-context";
export default function VideoList(){
    const {videos}=useVideos();;
    const {videoState:{searchQuery}}=useSearchFilter();
    const searchData=GetSearchData(videos,searchQuery);
    return (
        <div className="video-list-set">
            <div className="chips-bar flex-row gap padding-md bd-bottom margin-md">
                <div className={`chips chip-active } `}>
                    <p>All</p>
                </div>
                <div>
                    <p>Movies</p>
                </div>
                <div>
                    <p>Short film</p>
                </div>
                <div >
                    <p>Fantacy</p>
                </div>
                <div >
                    <p>Motivational</p>
                </div>
            </div>
            <div className="video-list cursor-pointer">
                {searchData.map(({_id,thumbNail,categoryName,title,subtitle,videoSpan,views,publishedYear})=>(
                    <VideoCard key={_id} 
                    thumbnailImg={thumbNail}
                    videoTitle={title}
                    videoCategory={categoryName}
                    videoPublishedYear={publishedYear}
                    videoSpan={videoSpan}
                    videoViews={views}
                    videoSubtitle={subtitle}
                    />
                ))}
            </div>
        </div>
    )
}