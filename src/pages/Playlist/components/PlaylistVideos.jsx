import { useParams } from "react-router-dom";
import { useData } from "../../../context/data-context";
import { VideoCard } from "../../Home/components/VIdeoCard";

const PlaylistVideos = () => {
  const { playListId } = useParams();
  const { playlist } = useData();
  const playlistVideo = playlist.find((list) => list._id === playListId);
  const { title, videos } = playlistVideo;

  return (
    <div>
      {title}
      {videos.length > 0 ? (
        <div>
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      ) : (
        <div>nothing added in {title}</div>
      )}
    </div>
  );
};

export {PlaylistVideos}