import { useNavigate } from "react-router-dom";
import '../SingleVideoPage.css'

const SingleVideoCard = ({video}) => {
  const navigate = useNavigate();
  const {_id, title, creator} = video;  
  const singleVideoHandler = () => {
    navigate(`/video/${_id}`);
  };
  const modifiedTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();

  return (
    <div className="responsive-img-container video-card">
      <img
        src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
        alt={`${title}`}
        className="img-responsive s-video-card-img"
        onClick={() => singleVideoHandler()}
      />
      <div className="flex-row-sb">
        <div className="p-1 flex-col-sb-start video-details">
          <h4 className="text-regular">{modifiedTitle}</h4>
          <div className="flex-row-sb video-minor-details">
            <p className="text-grey">{creator}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleVideoCard };
