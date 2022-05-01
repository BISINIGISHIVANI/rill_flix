import {Sidebar} from "../../componentes";
import VideoList from "../video-listing/video-listing";
// import { Link } from "react-router-dom";
export default function HomePage(){
    return (
        <div>
            <div className="flex-row">
                <div>
                <Sidebar/>
                </div>
                <div className="margin-left">
                <VideoList/> 
                </div>
            </div>
        </div>
    )
}