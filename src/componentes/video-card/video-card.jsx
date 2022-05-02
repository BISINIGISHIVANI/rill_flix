import {minion} from "../../assests/images/index";
import { avatarIcn } from "../../assests/icons/icon";
import "./video-card.css";
import {useState} from "react";
export default function VideoCard(){
    const [isMore,setIsMore]=useState(false);
    const BtnMoreToggle=()=>{
        setIsMore((value)=>!value)
    }
    return (
        <div className="video-card-set">
            <div className="videocard-img position-relative">
                <img className=" "src={minion}alt=""/>
                <div className="position-absolute video-timer">
                <span>05:00</span>
                </div>
            </div>
            <div className="">
                <div className="flex-row flex-center flex-space-between">
                <div>
                    <img className="video-profile" src={avatarIcn}alt=""/>
                </div>
                <div className="views-date-info flex-col">
                    <div className="flex-row flex-center gap-md">
                        <div>
                            <h3>minion despicable</h3>
                            <span>unknown</span>
                        </div>
                        <div>
                        <div className="position-relative">
                            <i onClick={BtnMoreToggle}className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        {isMore && 
                        (<div className="position-absolute flex-col gap">
                            <label> <i onClick={BtnMoreToggle}class="fa-solid fa-thumbs-up like "></i>Like</label>
                            <label htmlFor=""><i class="fa-solid fa-bookmark watch-later"></i>WatchLater</label>
                            <label htmlFor=""><i class="fa-solid fa-folder-plus playlist"></i> Bookmark</label>
                        </div>
                        )}
                       </div>
                    </div>
                    <div>
                    <span>2.7M Views</span>
                    <span>.1 year ago</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}