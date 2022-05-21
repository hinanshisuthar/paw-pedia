import { Categories } from "../../components/Categories/Categories";
import "./Home.css";
import { VideoCard } from "./components/VIdeoCard";
import { useData } from "../../context/data-context";
import { useEffect } from "react";
import { PlaylistModal } from "../../components/Modal/PlaylistModal";
import { categoryProducts, searchVideos } from "../../services/filterService";

const Home = () => {
  const { videos, sideMenu, setSideMenu, playlistMenu, search, categorizeBy } =
    useData();
  useEffect(() => setSideMenu(true), [sideMenu]);

  const getCategorizedVideos = categoryProducts(videos, categorizeBy);
  const getSearchedVideos = searchVideos(getCategorizedVideos, search);

  return (
    <>
      <div className="video-listing">
        <div className="categories-con">
          <Categories />
        </div>
        <div className="video-card-con p-1 ml-sm">
          {getSearchedVideos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      </div>
      {playlistMenu && (
        <div className="modal-con">
          <div className="modal-wrapper">
            <PlaylistModal />
          </div>
        </div>
      )}
    </>
  );
};

export { Home };
