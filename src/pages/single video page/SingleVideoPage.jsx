import { useParams } from "react-router-dom";
import { useData } from "../../context/data-context";
import {
  AiOutlineLike,
  MdOutlineWatchLater,
  MdOutlinePlaylistAdd,
} from "../../components/utilities/icons";
import './SingleVideoPage.css'
import { SingleVideoCard } from "./components/SingleVideoCard";

const SingleVideoPage = () => {
  const { videoId } = useParams();
  const { videos } = useData();

  const getSingleVideo = videos?.find((video) => video._id === videoId);

  return (
    <div className="flex-row-sb-top">
      <div className="flex-col-sb-start single-video-con">
        <div className="width-100 p-1 pr-2 height-100">
          <iframe
            src={`https://www.youtube.com/embed/${getSingleVideo._id}`}
            frameBorder="0"
            width="100%"
            height="400em"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
        </div>
        <div className="flex-row-sb p-1 width-100 pr-2">
          <div className="video-details">
            <h3>{getSingleVideo.title}</h3>
            <p>{getSingleVideo.creator}</p>
          </div>
          <div className="video-actions">
            <AiOutlineLike className="icon m-sm" size={25} />
            <MdOutlineWatchLater className="icon m-sm" size={25} />
            <MdOutlinePlaylistAdd className="icon m-sm" size={25} />
          </div>
        </div>
        <div className="p-1">{getSingleVideo.description}</div>
      </div>
      <div className="similar-videos flex-col-sb-start p-1">
        <h3 className="p-sm">Similar Videos</h3>
        {videos.slice(6).map((video) => (
          <SingleVideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export { SingleVideoPage };
