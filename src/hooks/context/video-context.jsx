import { createContext ,useContext,useState,useEffect} from "react";
import { getVideoData } from "../utils/video-utils/video-handler";

const VideoContext=createContext(null);
export const useVideos=()=>useContext(VideoContext);
export const VideoProvider=({children})=>{
    const [videos,setVideos]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{getVideoData(setVideos,setIsLoading)},[])
    return <VideoContext.Provider value={{videos,isLoading}}>
        {children}
    </VideoContext.Provider>
}