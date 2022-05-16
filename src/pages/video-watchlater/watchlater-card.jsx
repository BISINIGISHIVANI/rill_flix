import { useAuth } from "../../hooks/context/auth-context";
import { useWatchlater } from "../../hooks/context/watchlater-context";
import { deleteWatchlaterVideo } from "../../services/watchlater.services";
import { useMoreToggle } from "../../hooks/utils/toggle-box";
export const WatchLaterCard=({_id,thumbNail,videoSpan,title,subtitle})=>{
    const {authState:{token}}=useAuth();
    const {watchlaterDispatch}=useWatchlater();
    const [isMore,BtnMoreToggle]=useMoreToggle()
    const deleteFromWatchlterHandler = () => {
        deleteWatchlaterVideo(_id,token, watchlaterDispatch)
    }
    return <div className="flex-col gap-md mg-sm">
             <div className="flex-row flex-wrap place-items gap bd-sm">
                    <div className="position-relative">
                         <img className="img-responsive"src={thumbNail}alt="video"/>
                         <div className="position-absolute video-timer">
                         <span>{videoSpan}</span>
                         </div>
                     </div>
                     <div className="flex-row flex-wrap gap-md">
                        <div className="flex-col flex-center">
                            <h3>{title}</h3>
                            <h4>{subtitle}</h4>
                        </div>
                        <div>
                            <div className="position-relative">
                                <i onClick={BtnMoreToggle}className="fa-solid fa-ellipsis-vertical padding-md"></i>
                            </div>
                            {isMore && 
                            (<div onClick={BtnMoreToggle}className="flex-col gap place-items more-box">
                                <label onClick={deleteFromWatchlterHandler}>
                                  <i className="fa-solid fa-trash"></i>
                                  WatchLater
                                </label>
                            </div>
                            )}
                        </div>
                    </div>
               </div>
            </div>
}