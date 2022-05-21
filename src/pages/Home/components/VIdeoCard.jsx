import { useNavigate } from "react-router-dom";
import {
  MdOutlineWatchLater,
  MdWatchLater,
} from "../../../components/utilities/icons.jsx";
import { useAuth } from "../../../context/auth-context.js";
import { useData } from "../../../context/data-context.js";
import "./VideoCard.css";
import { addToWatchLater, removeFromWatchLater } from "../../../services/watchlaterService.jsx";

const VideoCard = ({ video }) => {
  const { _id, title, creator, date, views, inWatchlater } = video;
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const modifiedTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();

  const watchlaterHandler = () => {
      if(token) {
          if(inWatchlater) {
              removeFromWatchLater(dispatch, _id, token)
          } else {
              addToWatchLater(dispatch, video, token)
              console.log('added')
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
