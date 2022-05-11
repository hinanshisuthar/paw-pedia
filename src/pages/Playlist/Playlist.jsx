import { useData } from "../../context/data-context";
import { PlaylistFolder } from "./components/PlaylistFolder";
import { useEffect } from "react";

const Playlist = () => {
  const { playlist, sideMenu, setSideMenu } = useData();
  useEffect(() => setSideMenu(true), [sideMenu]);

  return (
    <div>
      <h3>My playlists {playlist.length}</h3>
      {playlist.length > 0 ? (
        <div className="video-card-con p-1 ml-sm">
          {playlist.map((folder) => (
            <PlaylistFolder key={folder._id} folder={folder} />
          ))}
        </div>
      ) : (
        <p>No playlists made.</p>
      )}
    </div>
  );
};

export { Playlist };
