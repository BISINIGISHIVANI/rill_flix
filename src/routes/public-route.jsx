import { Routes, Route } from "react-router-dom";
import { Footer } from "../componentes";
import { LandingPage } from "../pages";
import { SignInPage, SignUpPage, ForgotPage } from "../pages/authentication";
import { VideoLikedPage } from "../pages/video-liked/video-liked";
import { VideoWatchLaterPage } from "../pages/video-watchlater/video-watchlater";
import { VideoPlaylistPage } from "../pages/video-playlist/video-playlists";
import { SinglePlaylistPage } from "../pages/single-playlist/single-playlists";
import {SingleVideoPage} from "../pages/single-video/single-video";
import { VideoHistoryPage } from "../pages/video-history/video-history";
import{ VideoList} from "../pages";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePlaylistModal } from "../hooks/context/playlistModal-context";
import { PlaylistModal } from "../componentes/playlist-model/playlist-modal";
import MockmanEs from "mockman-js";
export default function PublicRoute() {
 const {modalState:{showModal}}=usePlaylistModal()
  return (
    <div>
      {showModal ? <PlaylistModal /> : ""}
      <Routes>
        <Route path="/mock" element={<MockmanEs />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<VideoList />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgotpassword" element={<ForgotPage />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
        <Route path="/likes" element={<VideoLikedPage />} />
        <Route path="/watchlater" element={<VideoWatchLaterPage />} />
        <Route path="/history" element={<VideoHistoryPage />} />
        <Route path="/playlist" element={<VideoPlaylistPage />} />
        <Route path="/playlist/:playlistId" element={<SinglePlaylistPage />} />
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
