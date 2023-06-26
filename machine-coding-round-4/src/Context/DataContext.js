import { createContext, useContext, useReducer } from "react";
import { forumData } from "../Data/Data";
import { DataReducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, {
    data: forumData,
    bookmarks: [],
    sortBy: null
  });
  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseData = () => useContext(DataContext);
