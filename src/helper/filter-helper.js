export const categoryData = (allVideo, selectedCategory)=>{
    return selectedCategory? allVideo.filter(video => video.category === selectedCategory) : allVideo
  }

 export const searchVideoData = (allVideo, searchData)=>{
    if(searchData){
      return allVideo.filter(video => video.title.toLowerCase().includes(searchData.trim().toLowerCase()));
    }
    return allVideo;
  }
  