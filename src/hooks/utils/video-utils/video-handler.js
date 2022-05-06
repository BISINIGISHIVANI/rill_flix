import { getVideoService } from "../../../services/video.services"
 export const getVideoData=async (setVideos)=>{
     try {
         const res=await getVideoService(setVideos)
         if(res.status===200){
             setVideos(res.data.videos)
            }
     } catch (error) {
         console.error(error)
     }
 }