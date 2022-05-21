import axios from "axios";
import { createContext } from "react";
import { useReducer, useEffect, useContext, useState } from "react";
import { initialState, dataReducer } from "../reducer/dataReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [sideMenu, setSideMenu] = useState(false);
  const [playlistMenu, setPlaylistMenu] = useState(false);
  const [playlistData, setPlaylistData] = useState({});

  useEffect(() => {
    const setVideos = async () => {
      try {
        const {
          data: { videos },
        } = await axios.get("/api/videos");
        dispatch({ type: "SET_VIDEOS", payload: [...videos] });
      } catch (error) {
        console.log(error);
      }
    };
    setVideos();
  }, []);

  useEffect(() => {
    const setCategories = async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        dispatch({ type: "SET_CATEGORY", payload: [...categories] });
      } catch (error) {
        console.log(error);
      }
    };
    setCategories();
  }, []);

  return (
    <DataContext.Provider
      value={{
        videos: state.videos,
        category: state.category,
        dispatch,
        sideMenu,
        setSideMenu,
        playlistMenu,
        setPlaylistMenu,
        playlist: state.playlist,
        playlistData,
        setPlaylistData,
        search: state.search,
        categorizeBy: state.categorizeBy,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
