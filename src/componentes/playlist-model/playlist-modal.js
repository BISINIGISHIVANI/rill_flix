import { useState } from "react"
import "./playlist-model.css"
import { useAuth } from "../../hooks/context/auth-context"
import { usePlaylists } from "../../hooks/context/playlists-context"
import { usePlaylistModal } from "../../hooks/context/playlistModal-context"
import { createPlaylist,addVideoToPlaylists,deleteVideoFromPlaylist } from "../../services/playlists-services"
import { toast } from "react-toastify"
export const PlaylistModal=()=>{
    const [playlistName,setPlaylistName]=useState({title:""})
    const {authState:{token}}=useAuth()
    const {playlistState:{playlists},playlistDispatch}=usePlaylists();
    const {modalState:{video},modalDispatch}=usePlaylistModal()
    const playlistInputHandler=(e)=>{
        setPlaylistName({...playlistName,title:e.target.value})
    }
    const checkPlaylist = (title) => {
    if (playlists.find((item) => item.title === title)) {
      toast.info('Playlist already exist')
    } else if (playlistName.title === '') {
      toast.info('Please Enter Playlist Name')
    } else {
      return true
    }
  }
  const createPlaylistHandler = () => {
    if (checkPlaylist(playlistName.title)) {
      createPlaylist(playlistName, playlistDispatch, token, video)
    }
    setPlaylistName({ ...playlistName, title:""})
  }
    const checkVideoInPlaylist = (_id) => {
      const playlist=playlists.find((item)=>item._id===_id)
      const check =playlist.videos.some((item) => item._id === video._id)
      return check
    }

  const videoInPlaylistHandler = ( _id) => {
    modalDispatch({ type: 'MODAL_CLOSE' })
    if (checkVideoInPlaylist(_id)) {
       deleteVideoFromPlaylist(_id, video._id, token, playlistDispatch)
       toast.info(`${video.title} removed from playlist`)
    }else{
      addVideoToPlaylists(_id, video, token, playlistDispatch)
      toast.success(`${video.title} added to playlist`)
    }
  }
    return <div className="modal-container cursor-pointer">
      <div className="modal">
        <div className="flex-row flex-space-between" >
           <h3>
            {playlists.length>0?
       "My Playlist": "Create New Playlist"}
                  </h3>
          <p>
            <i
              className="fa-solid fa-xmark crossIcon cursor-pointer"
              onClick={() => modalDispatch({ type: 'MODAL_CLOSE' })}
            ></i>
          </p>
        </div>
         {playlists.map(({ _id, title }) => 
            <div key={_id} className="mg-left padding-sm">
              <input
                type="checkbox"
                id={_id}
                onChange={() =>videoInPlaylistHandler(_id)}
                checked={checkVideoInPlaylist(_id)}
              />
              <label htmlFor={_id}>{title}</label>
            </div>
          )}
          <div className="flex-row flex-wrap gap-md padding-sm">
             <input
          type="text"
          className=""
          value={playlistName.title}
          placeholder="Create new playlist"
          onChange={playlistInputHandler}
        />
        <button
        className="primary-btn cursor-pointer"
          onClick={createPlaylistHandler}
        >
          Create
        </button>
          </div>
      </div>
    </div>

}