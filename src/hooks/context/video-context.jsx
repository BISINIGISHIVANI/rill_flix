import { createContext ,useContext,useState,useEffect} from "react";
import { getVideoData } from "../utils/video-utils/video-handler";

const VideoContext=createContext(null);
export const useVideos=()=>useContext(VideoContext);
export const VideoProvider=({children})=>{
    const [videos,setVideos]=useState([])
    useEffect(()=>{getVideoData(setVideos)},[])
    return <VideoContext.Provider value={{videos}}>
        {children}
    </VideoContext.Provider>
}