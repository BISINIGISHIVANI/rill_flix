import { getSingleVideoService } from "../../../services/video.services";
export const getSingleVideoData=async (setVideo,videoId)=>{
    try {
         const res=await getSingleVideoService(videoId)
         if(res.status===200){
             setVideo(res.data.video)
             console.log(res.data.video)
            }
     } catch (error) {
         console.error(error)
     }
}