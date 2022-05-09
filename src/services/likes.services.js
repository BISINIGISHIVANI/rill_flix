import axios from "axios"

const getLikedVideo = async (token,likeDispatch) => {
    try{
        const response = await axios.get("/api/user/likes", {headers:{authorization:token}})
        likeDispatch({type:"GET_LIKES", payload:response.data.likes})
    }
    catch(error){
        console.error(error);
    }
}

const addToLike = async (video,token,likeDispatch) => {
    try{
        const response = await axios.post("/api/user/likes", {video} ,{headers:{authorization: token}})
        likeDispatch({type:"LIKED_VIDEO", payload:response.data.likes})
    }
    catch(error){
        console.error(error);
    }
}
const deleteLiked = async (videoId, token,likeDispatch) => {
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, {headers:{authorization:token}})
      likeDispatch({type:"DELETE_LIKED", payload:response.data.likes})
    } catch (error) {
      console.error(error)
    }
  }
  export {getLikedVideo,addToLike,deleteLiked}