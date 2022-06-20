import { Sidebar,Navbar } from "../../componentes";
import {React} from "react";
export const VideoPlaylistPage=()=>{
    return (
      <div>
        <Navbar />
        <main>
          <div className="playlists-page flex-row">
            <Sidebar />
            <div className="user-playlists">
              <div className="playlist-container">
                My Playlist: PlayList
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}