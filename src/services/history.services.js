import axios from "axios"

const addToHistory = async (video,token,historyDispatch) => {
    try{
        const response = await axios.post("/api/user/history", {video} ,{headers:{authorization: token}})
        historyDispatch({type:"HISTORY_VIDEO", payload:response.data.history})
    }
    catch(error){
        console.error(error);
    }
}
const deleteHistory = async (videoId, token,historyDispatch) => {
    try {
      const response = await axios.delete(`/api/user/history/${videoId}`, {headers:{authorization:token}})
      historyDispatch({type:"DELETE_HISTORY", payload:response.data.history})
    } catch (error) {
      console.error(error)
    }
  }
  const deleteAllHistory=async (token,historyDispatch)=>{
    try {
      const response = await axios.delete(`/api/user/history/all`, {headers:{authorization:token}})
      historyDispatch({type:"DELETE_HISTORY_ALL", payload:response.data.history})
    } catch (error) {
      console.error(error)
    }
  }
  export {addToHistory,deleteHistory,deleteAllHistory}