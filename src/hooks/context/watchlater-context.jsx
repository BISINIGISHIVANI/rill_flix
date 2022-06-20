import { createContext, useContext, useReducer } from "react"
import { WatchLaterReducer } from "../reducers/watchlater-reducer";

const WatchLaterVideoContext = createContext(null)
const useWatchlater = () => useContext(WatchLaterVideoContext);

const WatchLaterProvider = ({children}) => {

    const [watchlaterState, watchlaterDispatch] = useReducer(WatchLaterReducer, {watchlater:[]})
    return(
        <WatchLaterVideoContext.Provider value={{watchlaterState, watchlaterDispatch}}>
            {children}
        </WatchLaterVideoContext.Provider>
    )
}
export {WatchLaterProvider,useWatchlater}