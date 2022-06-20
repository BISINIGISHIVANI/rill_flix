import { useAuth } from "../../hooks/context/auth-context"
import "./video-watch.css"
import { banner } from "../../assests/icons/icon";
import { useWatchlater } from "../../hooks/context/watchlater-context"
import { useEffect } from "react"
import { Navbar,Sidebar } from "../../componentes";
import { getWatchlaterVideo } from "../../services/watchlater.services";
import { WatchLaterCard } from "./watchlater-card";
export const VideoWatchLaterPage=()=>{
    const {authState:{token}}=useAuth();
    const {watchlaterState:{watchlater},watchlaterDispatch}=useWatchlater()
    useEffect(()=>{getWatchlaterVideo(token,watchlaterDispatch)})
    return <div>
    <Navbar/>
        <div className="flex-row">
            <div>
            <Sidebar/>
            </div>
            <div  className="flex-row flex-wrap gap-md flex-space-between">
                <div className="bd-lft mg-sm">
                    <img className="hr-img"src={banner} alt="video-playlist"/>
                    <h3>{watchlater.length} Videos<span>.Updated today</span></h3>
                </div>
                <div className="mg-sm">
                {watchlater.length >0 ? (
                  watchlater.map((item) => {
                   return  <div key={item._id}>
                       <WatchLaterCard key={item._id} {...item} />
                       </div>
                  })) : (
                <h1>No Watchlater videos</h1>
                )}
                </div>
            </div>
        </div>
</div>;
}