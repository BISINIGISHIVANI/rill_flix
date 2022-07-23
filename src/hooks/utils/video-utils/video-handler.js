import { getVideoService } from "../../../services/video.services"
 export const getVideoData=async (setVideos,setIsLoading)=>{
     try {
         const res=await getVideoService(setVideos)
         setIsLoading(true)
         if(res.status===200){
            setTimeout(()=>{
             setIsLoading(false)
            },500)
             setVideos(res.data.videos)
            }
     } catch (error) {
         console.error(error)
     }
 }