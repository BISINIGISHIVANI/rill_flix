import axios from "axios";

export const getVideoService=()=>{
    return axios.get("/api/videos")
}
export const getSingleVideoService=(videoId)=>{
    return axios.get(`/api/video/${videoId}`)
}