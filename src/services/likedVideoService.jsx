import axios from "axios";

const addToLiked = (dispatch, video, token) => {
  try {
    (async () => {
      const {
        data: { likes },
      } = await axios.post(
        "/api/user/likes",
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      likes &&
        dispatch({
          type: "ADD_TO_LIKES",
          payload: likes,
        });
    })();
  } catch (error) {
    console.log("Error in add to likes handler", error);
  }
};

const removeFromLiked = (dispatch, _id, token) => {
  try {
    (async () => {
      const {
        data: { likes },
      } = await axios.delete(`/api/user/likes/${_id}`, {
        headers: {
          authorization: token,
        },
      });
      likes && dispatch({ type: "ADD_TO_LIKES", payload: likes });
    })();
  } catch (err) {
    console.log("Error in removing from likes", err);
  }
};

export { addToLiked, removeFromLiked };
