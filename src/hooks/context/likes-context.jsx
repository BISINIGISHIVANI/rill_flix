import { createContext, useContext, useReducer } from "react"
import { LikeReducer } from "../reducers/likes-reducer";

const LikeVideoContext = createContext(null)
const useLike = () => useContext(LikeVideoContext);

const LikeVideoContextProvider = ({children}) => {

    const [likeState, likeDispatch] = useReducer(LikeReducer, {likes:[]})
    return(
        <LikeVideoContext.Provider value={{likeState, likeDispatch}}>
            {children}
        </LikeVideoContext.Provider>
    )
}
export {LikeVideoContextProvider,useLike}
