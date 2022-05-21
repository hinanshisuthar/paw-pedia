import { useNavigate } from "react-router-dom";
import {
    AiFillLike,
  AiOutlineLike,
  MdOutlineWatchLater,
  MdWatchLater,
} from "../../../components/utilities/icons.jsx";
import { useAuth } from "../../../context/auth-context.js";
import { useData } from "../../../context/data-context.js";
import "./VideoCard.css";
import { addToWatchLater, removeFromWatchLater } from "../../../services/watchlaterService.jsx";
import { addToLiked, removeFromLiked } from "../../../services/likedVideoService.jsx";

const VideoCard = ({ video }) => {
  const { _id, title, creator, date, views, inWatchlater, inLiked } = video;
  const { dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const modifiedTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();

  const watchlaterHandler = () => {
      if(token) {
          if(inWatchlater) {
              removeFromWatchLater(dispatch, _id, token)
          } else {
              addToWatchLater(dispatch, video, token)
              console.log('added to watchlist')
          }
      } else {
          navigate('/login')
      }
  }

  const likeHandler = () => {
    if(token) {
        if(inLiked) {
            removeFromLiked(dispatch, _id, token)
        } else {
            addToLiked(dispatch, video, token)
            console.log('added to liked')
        }
    } else {
        navigate('/login')
    }
}

  return (
    <div className="responsive-img-container video-card">
      <img
        src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
        alt={`${title}`}
        className="img-responsive"
      />
      <div className="flex-row-sb">
        <div className="p-1 flex-col-sb-start video-details">
          <h4 className="text-regular">{modifiedTitle}</h4>
          <div className="flex-row-sb video-minor-details">
            <p className="text-grey">{creator}</p>
            <span onClick={watchlaterHandler}>
              {inWatchlater ? (
                <MdWatchLater className="option-icon icon" size={22} />
              ) : (
                <MdOutlineWatchLater className="option-icon icon" size={22} />
              )}
            </span>
            <span onClick={likeHandler}>
              {inLiked ? (
                <AiFillLike className="option-icon icon" size={22} />
              ) : (
                <AiOutlineLike className="option-icon icon" size={22} />
              )}
            </span>
          </div>
          <div className="flex-row-sb text-grey video-minor-details">
            <small>{views} views</small>
            <small>{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
