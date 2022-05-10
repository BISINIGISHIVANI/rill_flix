import axios from "axios"
const getWatchlaterVideo=async (token,watchlaterDispatch)=>{
	try{
        const response = await axios.get("/api/user/watchlater", {headers:{authorization:token}})
        watchlaterDispatch({type:"GET_WATCH_LATER_VIDEO", payload:response.data.watchlater})
    }
    catch(error){
        console.error(error);
    }
}
const addToWatchlaterVideo = async (video,token,watchlaterDispatch) => {
    try{
        const response = await axios.post("/api/user/watchlater", {video} ,{headers:{authorization: token}})
        watchlaterDispatch({type:"WATCH_LATER_VIDEO", payload:response.data.watchlater})
    }
    catch(error){
        console.error(error);
    }
}

const deleteWatchlaterVideo = async (videoId, token,watchlaterDispatch) => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${videoId}`, {headers:{authorization:token}})
      watchlaterDispatch({type:"DELETE_WATCH_LATER_VIDEO", payload:response.data.watchlater})
    } catch (error) {
      console.error(error)
    }
  }

  export {deleteWatchlaterVideo,getWatchlaterVideo,addToWatchlaterVideo}