import {createContext, useContext, useReducer} from "react";
import { HistoryReducer } from "../reducers/history-reducer";

const HistoryVideoContext = createContext(null);
const useHistory = () => useContext(HistoryVideoContext);

const HistoryVideoContextProvider = ({children}) => {
  const [historyState,historyDispatch] = useReducer(HistoryReducer, {history:[]});
  return (
    <HistoryVideoContext.Provider value={{historyState,historyDispatch}}>
      {children}
    </HistoryVideoContext.Provider>
  );
};
export {HistoryVideoContextProvider, useHistory};
