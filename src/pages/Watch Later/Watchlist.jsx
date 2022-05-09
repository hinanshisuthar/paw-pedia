import { useData } from "../../context/data-context";
import { VideoCard } from "../Home/components/VIdeoCard";
import { useEffect } from "react";

const Watchlist = () => {
  const { videos, sideMenu, setSideMenu } = useData();
  useEffect(() => setSideMenu(true), [sideMenu]);

  const watchLaterList = videos.filter((video) => video.inWatchlater);
  return (
    <div>
      <h3>Watch Later {watchLaterList.length}</h3>
      {watchLaterList.length > 0 ? (
        <div className="video-card-con p-1 ml-sm">
        {watchLaterList.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
      ) : (
          <p>No videos in Watchlist</p>
      )}
      
    </div>
  );
};

export { Watchlist };
