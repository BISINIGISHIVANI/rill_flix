export const GetSearchData = (videoData,searchQuery)=>
 videoData.filter((video)=>video["title"].toLowerCase().includes(searchQuery));

