export const HistoryReducer = (historyState,historyAction) => {
    switch(historyAction.type){
        case "HISTORY_VIDEO":
            return{...historyState,history:historyAction.payload}
        case "DELETE_HISTORY":
            return {...historyState,history:historyAction.payload}
        case "DELETE_HISTORY_ALL":
            return {...historyState,history:historyAction.payload}
        default:
            return historyState;
    }
}