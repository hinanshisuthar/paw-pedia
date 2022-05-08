import axios from "axios";

const addToWatchLater = (dispatch, video, token) => {
    try {
      (async () => {
        const {
          data: { watchlater },
        } = await axios.post(
          "/api/user/watchlater",
          {
            video,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        watchlater &&
          dispatch({
            type: 'ADD_TO_WATCHLATER',
            payload: watchlater,
          });
      })();
    } catch (error) {
      console.log("Error in add to watchlater handler", error);
    }
  };

const removeFromWatchLater = (dispatch, _id, token) => {
  try {
    (async () => {
      const {
        data: { watchlater },
      } = await axios.delete(`/api/user/watchlater/${_id}`, {
        headers: {
          authorization: token,
        },
      });
      watchlater &&
        dispatch({ type: "ADD_TO_WATCHLATER", payload: watchlater });
    })();
  } catch (err) {
    console.log("Error in removing from watchlater", err);
  }
};

export { addToWatchLater, removeFromWatchLater };
