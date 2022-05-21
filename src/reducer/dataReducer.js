import { videos } from "../backend/db/videos";

const initialState = {
  videos: [],
  category: [],
  playlist: [],
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
            inHistory: false,
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
    case "SET_HISTORY":
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          inHistory: payload.some((item) => item._id === video._id),
        })),
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: payload,
      };
    case "PLAYLIST_VIDEO":
      return {
        ...state,
        playlist: state.playlist.map((list) =>
          list._id === payload._id ? payload : list
        ),
      };
    default:
      return state;
  }
};

export { initialState, dataReducer };
