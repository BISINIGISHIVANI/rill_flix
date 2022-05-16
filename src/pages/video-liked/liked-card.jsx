import { useAuth } from "../../hooks/context/auth-context"
import { useLike } from "../../hooks/context/likes-context"
import { deleteLiked } from "../../services/likes.services";
import { useMoreToggle } from "../../hooks/utils/toggle-box";
export const LikedCard=({_id,thumbNail,videoSpan,title,subtitle})=>{
    const {authState:{token}}=useAuth();
    const {likeDispatch}=useLike()
    const [isMore,BtnMoreToggle]=useMoreToggle()
    const unlikeHandler = () => {
        deleteLiked(_id, token,likeDispatch)
    }
    return <div className="flex-col gap-md mg-sm">
             <div className="flex-row flex-wrap place-items gap bd-sm">
                    <div className="position-relative">
                         <img className="img-responsive"src={thumbNail}alt="video"/>
                         <div className="position-absolute video-timer">
                         <span>{videoSpan}</span>
                         </div>
                     </div>
                     <div>
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
                            (<div onClick={BtnMoreToggle}className=" flex-col gap place-items more-box">
                                <label onClick={unlikeHandler}>
                                  <i className="fa-solid fa-trash"></i>
                                  Like
                                </label>
                            </div>
                            )}
                        </div>
                     </div>
                     </div>
            </div>
       </div>
}