import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import { useData } from "../../../context/data-context";
import { removePlaylist } from "../../../services/playlistService";
import "../Playlist.css";
import { BsFillTrashFill } from "../../../components/utilities/icons";

const PlaylistFolder = ({ folder }) => {
  const { _id, title, videos } = folder;
  const { token } = useAuth();
  const navigate = useNavigate();
  const { dispatch } = useData();

  return (
    <div className="p-1 folder">
      {videos.length > 0 ? (
        <div key={_id} className="cat-div responsive-img-container p-1 folder">
          <img
            src={`https://i.ytimg.com/vi/${videos[0]._id}/maxresdefault.jpg`}
            alt={title}
            className="img-responsive cat-img pointer"
            onClick={() => navigate(`/playlist/${_id}`)}
          />
          <div className="flex-col-sb-start py-sm">
            <h6 className="text-center">Name: {title}</h6>
            <h6 className="text-center py-sm">
              Contains: {videos.length} videos
            </h6>
            <div onClick={() => removePlaylist(dispatch, _id, token)}>
              <BsFillTrashFill className="icon mx-sm" size={20} />
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-playlist">
          <p>{title} is empty</p>
        </div>
      )}
    </div>
  );
};

export { PlaylistFolder };
