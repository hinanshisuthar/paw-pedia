import axios from "axios";

const createNewPlaylist = (dispatch, name, token) => {
  try {
    (async () => {
      const {
        data: { playlists },
      } = await axios.post(
        "/api/user/playlists",
        {
          playlist: {
            title: name,
            description: "",
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      playlists && dispatch({ type: "SET_PLAYLIST", payload: playlists });
    })();
  } catch (err) {
    console.log("Errow while adding to playlist");
  }
};

const removePlaylist = (dispatch, id, token) => {
  try {
    (async () => {
      const {
        data: { playlists },
      } = await axios.delete(`/api/user/playlists/${id}`, {
        headers: {
          authorization: token,
        },
      });
      playlists && dispatch({ type: "SET_PLAYLIST", payload: playlists });
    })();
  } catch (err) {
    console.log("Errow while removing playlist");
  }
};

const addVideoToPlaylist = (dispatch, id, video, token) => {
  try {
    (async () => {
      const {
        data: { playlist },
      } = await axios.post(
        `/api/user/playlists/${id}`,
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      playlist && dispatch({ type: "PLAYLIST_VIDEO", payload: playlist });
    })();
  } catch (err) {
    console.log("Errow while adding to playlist");
  }
};

const removeVideoFromPlaylist = (dispatch, id, videoId, token) => {
  try {
    (async () => {
      const {
        data: { playlist },
      } = await axios.delete(`/api/user/playlists/${id}/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      playlist &&
        dispatch({
          type: "PLAYLIST_VIDEO",
          payload: playlist,
        });
    })();
  } catch (error) {
    console.log("Error in remove video to playlist handler", error);
  }
};

export {
  createNewPlaylist,
  removePlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
};
