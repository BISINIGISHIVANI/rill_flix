import {Routes,Route} from "react-router-dom";
import {Footer } from "../componentes";
import { HomePage , LandingPage } from "../pages";
import { SignInPage,SignUpPage,ForgotPage  } from "../pages/authentication";
import { VideoLikedPage } from "../pages/video-liked/video-liked";
import { VideoWatchLaterPage } from "../pages/video-watchlater/video-watchlater";
export default function PublicRoute(){
    return (
        <div>
            <Routes>
               <Route path="/" element={<LandingPage/>}/>
               <Route path="/home" element={<HomePage/>}/>
               <Route path="/signin"element={<SignInPage/>}/>
               <Route path="/signup"element={<SignUpPage/>}/>
               <Route path="/forgotpassword"element={<ForgotPage/>}/>
               <Route path="/likes"element={<VideoLikedPage/>}/>
               <Route path="/watchlater"element={<VideoWatchLaterPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}