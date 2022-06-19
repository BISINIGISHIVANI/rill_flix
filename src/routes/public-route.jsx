import { Routes, Route } from "react-router-dom";
import { Footer } from "../componentes";
import { LandingPage } from "../pages";
import { SignInPage, SignUpPage, ForgotPage } from "../pages/authentication";
import { VideoLikedPage } from "../pages/video-liked/video-liked";
import { VideoWatchLaterPage } from "../pages/video-watchlater/video-watchlater";
import { VideoPlaylistPage } from "../pages/video-playlist/video-playlist";
import { SinglePlaylistPage } from "../pages/single-playlist/single-playlist";
import {SingleVideoPage} from "../pages/single-video/single-video";
import{ VideoList} from "../pages";
export default function PublicRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/explore"
          element={<VideoList/>}
        />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgotpassword" element={<ForgotPage />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
        <Route path="/likes" element={<VideoLikedPage />} />
        <Route path="/watchlater" element={<VideoWatchLaterPage />} />
        <Route path="/playlist" element={<VideoPlaylistPage />} />
        <Route path="playlist/:playlistId" element={<SinglePlaylistPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
