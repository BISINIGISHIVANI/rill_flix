import { useState,useEffect } from "react"
import { useAuth } from "../../hooks/context/auth-context"
import { useNavigate, useParams } from "react-router"
import { getSinglePlaylist,deletePlaylist } from "../../services/playlists-services"
import { PlaylistVideoCard } from "../../componentes/playlist-videoCard/playlists-videocard"
import { Navbar, Sidebar } from "../../componentes"
import { banner } from "../../assests/icons/icon"
import { usePlaylists } from "../../hooks/context/playlists-context"
export const SinglePlaylistPage = () => {
     const {
       authState: {token},
     } = useAuth();
     const {playlistDispatch}=usePlaylists()
    const {playlistId} = useParams();
     const navigate=useNavigate()
    const [playlistVideo, setplaylistVideo] = useState(null);
   const deletePlaylistHandler=()=>{
    deletePlaylist(playlistId,token,playlistDispatch)
    navigate("/playlist");
  }
    useEffect(() =>{getSinglePlaylist(token, setplaylistVideo, playlistId)}, [token, playlistId]);
     return (
       <div>
         <Navbar />
         <div className="flex-row ">
           <div>
             <Sidebar />
           </div>
           <div className="flex-row flex-wrap gap-md flex-space-between">
             <div className="bd-lft mg-sm">
               <img className="hr-img" src={banner} alt="video-playlist" />
               <h3>
                 Playlist videos
               </h3>
             </div>
             <div>
               <h2>your Playlsits videos</h2>
               <button onClick={()=>deletePlaylistHandler()}></button>
               {playlistVideo ? (
                 playlistVideo.videos.map((item) => {
                   return (
                     <div key={item._id}>
                       <PlaylistVideoCard
                         playlistId={playlistId}
                         {...item}
                         setplaylistVideo={setplaylistVideo}
                       />
                     </div>
                   );
                 })
               ) : (
                 <h3>Playlist is Empty</h3>
               )}
             </div>
           </div>
         </div>
       </div>
     );

}