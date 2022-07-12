const updatePlaylistHandler = (playlistId, playlists, playlistData) => {
  return playlists.reduce(
    (updatedPlaylist, item) =>
      item._id === playlistId
        ? [...updatedPlaylist, playlistData]
        : [...updatedPlaylist, item],
    []
  );
};
export const PlaylistsReducer = (state, action) => {
  switch (action.type) {
    case "NEW_PLAYLIST_NAME":
      return { ...state, playlists: action.payload };
    case "UPDATE_PLAYLIST":
      return {
        ...state,
        playlists: updatePlaylistHandler(
          action.payload.playlistId,
          state.playlists,
          action.payload.playlistData
        )
      };
    case "DELETE_PLAYLIST":
      return { ...state, playlists: action.payload };

    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlists: updatePlaylistHandler(
          action.payload.playlistId,
          state.playlists,
          action.payload.playlistData
        )
      };
    default:
      return state;
  }
};
