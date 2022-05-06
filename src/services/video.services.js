import axios from "axios";

export const getVideoService=()=>{
    return axios.get("/api/videos")
}