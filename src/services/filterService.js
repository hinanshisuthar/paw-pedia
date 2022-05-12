const searchVideos = (videos, search) => {
  return search
    ? [...videos].filter((video) =>
        video.title.toLowerCase().includes(search.toLowerCase())
      )
    : [...videos];
};

const categoryProducts = (videos, categorizeBy) => {
    if(categorizeBy && categorizeBy !== "All") {
        return [...videos].filter((video) => video.category === categorizeBy)
    }
    return [...videos]
}

export { searchVideos, categoryProducts };
