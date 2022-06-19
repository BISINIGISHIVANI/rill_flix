export const FilterLabel=(filterArray,labelName)=>{
     if (labelName === "All") {
      return filterArray;
    }
    return filterArray.filter((item) => (item.categoryName === labelName ? item : false))
}