import { useData } from "../../context/data-context";
import { VideoCard } from "../Home/components/VIdeoCard";
import { useEffect } from "react";
import { BsFillTrashFill } from "../../components/utilities/icons";
import {
  removeAllFromHistory,
  removeFromHistory,
} from "../../services/historyService";
import { useAuth } from "../../context/auth-context";
import { PlaylistModal } from "../../components/Modal/PlaylistModal";
import './History.css'

const History = () => {
  const { videos, sideMenu, setSideMenu, dispatch, playlistMenu } = useData();
  useEffect(() => setSideMenu(true), [sideMenu]);
  const { token } = useAuth();

  const historyList = videos.filter((video) => video.inHistory);
  return (
    <>
      <div className="p-1">
        <div className="flex-row-sb-start">
          <h3>My history</h3>
          <small
            className="create-account p-sm pointer"
            onClick={() => removeAllFromHistory(dispatch, token)}
          >
            Clear All
          </small>
        </div>

        {historyList.length > 0 ? (
          <div className="video-card-con p-1 ml-sm">
            {historyList.map((video) => (
              <div key={video._id} className="history-card p-sm">
                <VideoCard key={video._id} video={video} />
                <BsFillTrashFill className="icon mx-sm mt-sm"
                  onClick={() => removeFromHistory(dispatch, video._id, token)}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="p-sm">No videos in History</p>
        )}
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

export { History };
