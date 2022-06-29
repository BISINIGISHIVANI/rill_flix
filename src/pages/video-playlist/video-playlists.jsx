import {Sidebar, Navbar} from "../../componentes";
import { usePlaylists } from "../../hooks/context/playlists-context";
import { PlaylistsCard } from "../../componentes/playlist-card/playlists-card";
export const VideoPlaylistPage = () => {
  const {
    playlistState: {playlists},
  } = usePlaylists();
  return (
    <div>
      <Navbar />
      <main>
        <div className="playlists-page flex-row">
          <Sidebar />
          <div className="user-playlists">
            {playlists.length > 0 ? (
              <div className="flex-col">
                <h2> My Playlist: {playlists.length}</h2>
                <PlaylistsCard playlists={playlists} />
              </div>
            ) : (
              <div className="flex-col">
                <h1>No playlists</h1>
                <h3>Start Creating Your Playlists</h3>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};