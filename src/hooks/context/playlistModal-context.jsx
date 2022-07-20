import {ModalReducer} from "../reducers/playlistModal-reducer";
import {createContext, useContext, useReducer} from "react";

const PlaylistModalContext = createContext(null);
const usePlaylistModal = () => useContext(PlaylistModalContext);
const PlaylistModalProvider = ({children}) => {
  const [modalState, modalDispatch] = useReducer(ModalReducer, {
    showModal: false,
    video: {},
  });
  return (
    <PlaylistModalContext.Provider value={{modalState, modalDispatch}}>
      {children}
    </PlaylistModalContext.Provider>
  );
};

export {PlaylistModalProvider, usePlaylistModal};