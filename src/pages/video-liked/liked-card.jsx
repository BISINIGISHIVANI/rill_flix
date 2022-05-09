import { useAuth } from "../../hooks/context/auth-context"
import { useLike } from "../../hooks/context/likes-context"
import { deleteLiked } from "../../services/likes.services";
export const LikedCard=({_id,thumbNail,videoSpan,title,subtitle})=>{
    const {authState:{token}}=useAuth();
    const {likeDispatch}=useLike()
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
                    <div>
                        <h3>{title}</h3>
                        <h4>{subtitle}</h4>
                    </div>
                    <div>
                         <span>Remove Like</span>
                          <i onClick={unlikeHandler}className="fa-solid fa-trash padding-md"></i>
                    </div>
                     </div>
                     
            </div>
       </div>
}