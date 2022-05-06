import {createContext,useContext,useReducer} from "react";
import { FilterReducer } from "../reducers/filter-reducer";

const FilterContext=createContext(null)

export const  useSearchFilter=()=>useContext(FilterContext);

export const FilterProvider=({children})=>{
    const [videoState,dispatch]=useReducer(FilterReducer,{
        searchQuery:"",
    })
    return (
        <FilterContext.Provider value={{videoState,dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}