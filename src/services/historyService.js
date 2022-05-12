import axios from "axios";

const addToHistory = (dispatch, video, token) => {
  try {
    (async () => {
      const {
        data: { history },
      } = await axios.post(
        "/api/user/history",
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      history &&
        dispatch({
          type: "SET_HISTORY",
          payload: history,
        });
    })();
  } catch (error) {
    console.log("Error in add to history handler", error);
  }
};

const removeFromHistory = (dispatch, _id, token) => {
  try {
    (async () => {
      const {
        data: { history },
      } = await axios.delete(`/api/user/history/${_id}`, {
        headers: {
          authorization: token,
        },
      });
      history && dispatch({ type: "SET_HISTORY", payload: history });
    })();
  } catch (err) {
    console.log("Error in removing from history", err);
  }
};

const removeAllFromHistory = (dispatch, token) => {
    try {
      (async () => {
        const {
          data: { history },
        } = await axios.delete('/api/user/history/all', {
          headers: {
            authorization: token,
          },
        });
        history && dispatch({ type: "SET_HISTORY", payload: history });
      })();
    } catch (err) {
      console.log("Error in removing all videos from history", err);
    }
  };

export { addToHistory, removeFromHistory, removeAllFromHistory };
