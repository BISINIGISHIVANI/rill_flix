export const WatchLaterReducer = (watchlaterState, watchlaterAction) => {
    switch(watchlaterAction.type){
        case "WATCH_LATER_VIDEO":
            return{...watchlaterState, watchlater:watchlaterAction.payload}
        case "GET_WATCH_LATER_VIDEO":
            return {...watchlaterState, watchlater:watchlaterAction.payload}
        case "DELETE_WATCH_LATER_VIDEO":
            return {...watchlaterState, watchlater:watchlaterAction.payload}
        default:
            return watchlaterState;
    }
}