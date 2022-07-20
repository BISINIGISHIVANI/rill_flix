import { PlaylistsReducer } from "../reducers/playlists-reducer";
import {createContext, useReducer, useContext} from "react";

const PlaylistContext = createContext(null);
const usePlaylists = () => useContext(PlaylistContext);

const PlaylistContextProvider = ({children}) => {
  const [playlistState, playlistDispatch] = useReducer(PlaylistsReducer, {
    playlists: [],
  });

  return (
    <PlaylistContext.Provider value={{playlistState, playlistDispatch}}>
      {children}
    </PlaylistContext.Provider>
  );
};

export {PlaylistContextProvider, usePlaylists};