import { useAuth } from "../../hooks/context/auth-context"
import { useLike } from "../../hooks/context/likes-context"
import { getLikedVideo } from "../../services/likes.services"
import { useEffect } from "react"
import {Navbar,Sidebar} from "../../componentes/index"
import {LikedCard} from "../video-liked/liked-card"
export const VideoLikedPage=()=>{
    const {authState:{token}}=useAuth()
    const { likeState:{likes}, likeDispatch } = useLike()
    useEffect(()=>getLikedVideo(token,likeDispatch),[])
    return <div>
        <Navbar/>
            <div className="flex-row">
                <div>
                <Sidebar/>
                </div>
                <div className="bd-lft mg-sm">
                {likes.length >0 ? (
                  likes.map((item) => {
                   return <div key={item._id}>
                       <h2>Liked videos</h2>
                       <LikedCard key={item._id} {...item} />
                       </div>
                  })) : (
                <h1>No liked videos</h1>
                )}
                </div>
            </div>
    </div>
}