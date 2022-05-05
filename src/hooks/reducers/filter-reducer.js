export const FilterReducer = (videoState, action) => {
    switch (action.type) {
      case "SEARCH_VIDEOS":
        return {...videoState,searchQuery:action.payload}
      case "RESET":
        return {
          searchQuery:"",
        }
      default:
        return videoState;
    }
  }