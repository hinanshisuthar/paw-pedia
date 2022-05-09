import { videos } from "../backend/db/videos";

const initialState = {
  videos: [],
  category: [],
};

const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_VIDEOS":
      return {
        ...state,
        videos: [
          ...payload.map((video) => ({
            ...video,
            inWatchlater: false,
            inLiked: false,
          })),
        ],
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: [
          ...payload.map((category) => ({
            ...category,
          })),
        ],
      };
    case "ADD_TO_WATCHLATER":
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          inWatchlater: payload.some((item) => item._id === video._id),
        })),
      };
      case "ADD_TO_LIKES":
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          inLiked: payload.some((item) => item._id === video._id),
        })),
      };
    default:
      return state;
  }
};

export { initialState, dataReducer };
