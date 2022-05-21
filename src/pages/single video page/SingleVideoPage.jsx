import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../context/data-context";
import {
  AiOutlineLike,
  MdOutlineWatchLater,
  MdOutlinePlaylistAdd,
  MdWatchLater,
  AiFillLike,
} from "../../components/utilities/icons";
import "./SingleVideoPage.css";
import { SingleVideoCard } from "./components/SingleVideoCard";
import { useAuth } from "../../context/auth-context";
import {
  removeFromWatchLater,
  addToWatchLater,
} from "../../services/watchlaterService";
import { addToLiked, removeFromLiked } from "../../services/likedVideoService";
import { PlaylistModal } from "../../components/Modal/PlaylistModal";

const SingleVideoPage = () => {
  const { videoId } = useParams();
  const { dispatch, videos, playlistMenu, setPlaylistMenu, setPlaylistData } =
    useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const getSingleVideo = videos?.find((video) => video._id === videoId);
  const inWatchlater = getSingleVideo && getSingleVideo.inWatchlater;
  const inLiked = getSingleVideo && getSingleVideo.inLiked;

  const watchlaterHandler = () => {
    if (token) {
      if (inWatchlater) {
        removeFromWatchLater(dispatch, _id, token);
      } else {
        addToWatchLater(dispatch, getSingleVideo, token);
        console.log("added to watchlist");
      }
    } else {
      navigate("/login");
    }
  };

  const likeHandler = () => {
    if (token) {
      if (inLiked) {
        removeFromLiked(dispatch, _id, token);
      } else {
        addToLiked(dispatch, getSingleVideo, token);
        console.log("added to liked");
      }
    } else {
      navigate("/login");
    }
  };

  const playlistHandler = () => {
    if (token) {
      setPlaylistMenu(true);
      setPlaylistData(getSingleVideo);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
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
              <span onClick={watchlaterHandler}>
                {inWatchlater ? (
                  <MdWatchLater className="option-icon m-sm icon" size={22} />
                ) : (
                  <MdOutlineWatchLater
                    className="option-icon m-sm icon"
                    size={22}
                  />
                )}
              </span>
              <span onClick={likeHandler}>
                {inLiked ? (
                  <AiFillLike className="option-icon m-sm icon" size={22} />
                ) : (
                  <AiOutlineLike className="option-icon m-sm icon" size={22} />
                )}
              </span>
              <span onClick={playlistHandler}>
                <MdOutlinePlaylistAdd
                  className="option-icon m-sm icon"
                  size={22}
                />
              </span>
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

export { SingleVideoPage };
