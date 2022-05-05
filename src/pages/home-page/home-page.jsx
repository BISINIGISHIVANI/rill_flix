import {Sidebar} from "../../componentes";
import VideoList from "../video-listing/video-listing";
import { Navbar } from "../../componentes";
export default function HomePage(){
    return (
        <div>
            <Navbar/>
            <div className="flex-row">
                <div>
                <Sidebar/>
                </div>
                <div>
                <VideoList/> 
                </div>
            </div>
        </div>
    )
}