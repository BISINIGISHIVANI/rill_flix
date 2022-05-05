import { avatarIcn } from "../../assests/icons/icon";
import "./video-card.css";
import {useState} from "react";
export default function VideoCard({
    thumbnailImg,
    id,
    videoSubtitle,
    videoTitle,
    videoCategory,
    videoSpan,
    videoViews,
    videoPublishedYear
}){
    const [isMore,setIsMore]=useState(false);
    const BtnMoreToggle=()=>{
        setIsMore((value)=>!value)
    }
    return (
        <div className="video-card-set"key={id}>
            <div className="videocard-img position-relative">
                <img src={thumbnailImg}alt="video-image"/>
                <div className="position-absolute video-timer">
                <span>{videoSpan}</span>
                </div>
            </div>
            <div>
                <div className="flex-row flex-center flex-space-between">
                    <div>
                        <img className="video-profile" src={avatarIcn}alt="icons"/>
                    </div>
                    <div className="views-date-info flex-col">
                        <div className="flex-row flex-center gap-md">
                            <div>
                                <h3>{videoTitle}</h3>
                                <span>{videoSubtitle}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="position-relative">
                            <i onClick={BtnMoreToggle}className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        {isMore && 
                        (<div className="position-absolute flex-col gap more-box">
                            <label className="hover-white"> <i onClick={BtnMoreToggle}className="fa-solid fa-thumbs-up like "></i>Like</label>
                            <label><i className="fa-solid fa-bookmark watch-later"></i>Bookmark</label>
                            <label><i className="fa-solid fa-folder-plus playlist"></i> WatchLater</label>
                        </div>
                        )}
                    </div>
                </div>
                <div className="flex-row flex-center flex-space-between">
                    <div></div>
                    <div>
                    <span>{videoViews} Views</span>
                    <span>.{videoPublishedYear}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}