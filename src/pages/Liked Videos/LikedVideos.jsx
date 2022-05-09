import { useData } from "../../context/data-context";
import { VideoCard } from "../Home/components/VIdeoCard";
import { useEffect } from "react";

const LikedVideos = () => {
  const { videos, sideMenu, setSideMenu } = useData();
  useEffect(() => setSideMenu(true), [sideMenu]);

  const likedVideosList = videos.filter((video) => video.inLiked);
  return (
    <div>
      <h3>Liked Videos {likedVideosList.length}</h3>
      {likedVideosList.length > 0 ? (
        <div className="video-card-con p-1 ml-sm">
          {likedVideosList.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      ) : (
        <p>No videos in Liked Videos</p>
      )}
    </div>
  );
};

export { LikedVideos };
