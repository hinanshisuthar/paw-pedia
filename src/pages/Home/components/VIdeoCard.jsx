import { MdOutlineWatchLater } from "../../../components/utilities/icons.jsx";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  const { _id, title, creator, date, views } = video;

  const modifiedTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();

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
            <MdOutlineWatchLater className="option-icon" size={22} />
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
