import { Categories } from "../../components/Categories/Categories";
import "./Home.css";
import { VideoCard } from "./components/VIdeoCard";
import { useData } from "../../context/data-context";

const Home = () => {
  const { videos, category } = useData();

  return (
    <div className="video-listing">
      <div className="categories-con">
        <Categories />
      </div>
      <div className="video-card-con p-1 ml-sm">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export { Home };
