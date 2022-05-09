import axios from "axios";
import { createContext } from "react";
import { useReducer, useEffect, useContext, useState } from "react";
import { initialState, dataReducer } from "../reducer/dataReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [sideMenu, setSideMenu] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos },
        } = await axios.get("/api/videos");
        dispatch({ type: "SET_VIDEOS", payload: [...videos] });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        dispatch({ type: "SET_CATEGORY", payload: [...categories] });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{ videos: state.videos, category: state.category, dispatch, sideMenu, setSideMenu }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
