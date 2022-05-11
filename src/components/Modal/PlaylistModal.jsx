import { useData } from "../../context/data-context";
import "./PlaylistModal.css";
import { MdCancel } from "../utilities/icons";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import {
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  createNewPlaylist,
} from "../../services/playlistService";

const PlaylistModal = () => {
  const { playlistMenu, setPlaylistMenu, dispatch, playlist, playlistData } =
    useData();
  const [playlistName, setPlaylistName] = useState("");
  const { token } = useAuth();

  //   const createPlaylistHandler = (e) => {
  //     if (e.key === "Enter" && e.target.value !== "") {
  //       createNewPlaylist(dispatch, playlistName, token);
  //       setPlaylistName("");
  //     }
  //   };

  const createPlaylistHandler = () => {
    playlistName && createNewPlaylist(dispatch, playlistName, token);
    setPlaylistName("");
  };

  return (
    <div className="modal-wrapper p-sm">
      <div>
        <div className="p-1">
          <MdCancel
            className="icon"
            size={20}
            onClick={() => setPlaylistMenu(false)}
          />
        </div>
        {playlist.map((list) => {
          const inPlaylist = list.videos?.some(
            (list) => list._id === playlistData._id
          );

          return (
            <ul className="flex-row-sb-start chips-list" key={list._id}>
              <li
                className="flex-row-sb-start mr-md p-sm chip m-sm"
                
              >
                <label htmlFor="" className="flex-row-sb-start chips-list">
                  <input
                    type="checkbox"
                    className="playlist-chk-box mx-sm"
                    checked={inPlaylist}
                    onChange={(e) =>
                      e.target.checked
                        ? addVideoToPlaylist(
                            dispatch,
                            list._id,
                            playlistData,
                            token
                          )
                        : removeVideoFromPlaylist(
                            dispatch,
                            list._id,
                            playlistData._id,
                            token
                          )
                    }
                  />
                  <span>{list.title}</span>
                </label>
              </li>
            </ul>
          );
        })}
        <div>
          <input
            type="text"
            placeholder="press enter to add label"
            className="chips-input p-sm my-sm"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
          <button className="btn btn-primary" onClick={createPlaylistHandler}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
