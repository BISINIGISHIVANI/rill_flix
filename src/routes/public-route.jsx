import { Routes, Route } from "react-router-dom";
import { Footer } from "../componentes";
import { ErrorPage, LandingPage } from "../pages";
import { SignInPage, SignUpPage, ForgotPage } from "../pages/authentication";
import { VideoLikedPage } from "../pages/video-liked/video-liked";
import { VideoWatchLaterPage } from "../pages/video-watchlater/video-watchlater";
import { VideoPlaylistPage } from "../pages/video-playlist/video-playlist";
import { SinglePlaylistPage } from "../pages/single-playlist/single-playlist";
import {SingleVideoPage} from "../pages/single-video/single-video";
import { VideoHistoryPage } from "../pages/video-history/video-history";
import{ VideoList} from "../pages";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function PublicRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<VideoList />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgotpassword" element={<ForgotPage />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
        <Route path="/likes" element={<VideoLikedPage />} />
        <Route path="/watchlater" element={<VideoWatchLaterPage />} />
        <Route path="/history"element={<VideoHistoryPage/>}/>
        <Route path="/playlist" element={<VideoPlaylistPage />} />
        <Route path="playlist/:playlistId" element={<SinglePlaylistPage />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
