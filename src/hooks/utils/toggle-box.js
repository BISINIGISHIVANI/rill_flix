import {useState} from "react";
export const useMoreToggle=()=>{
    const [isMore,setIsMore]=useState(false);
  const BtnMoreToggle=()=>{
        isMore===false ?setIsMore((value)=>!value):setIsMore(false)
    }
    return [isMore,BtnMoreToggle]
}
