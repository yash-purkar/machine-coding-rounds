import { createContext, useContext, useEffect, useReducer } from "react";
import { Data } from "../Data/Data";
import { DataInitialSate, DataReducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, DataInitialSate);

  useEffect(() => {
    const prevData = localStorage.getItem("recipeData");

    if (prevData) {
      dataDispatch({
        type: "INITIALIZE_DATA",
        payload: JSON.parse(localStorage.getItem("recipeData"))
      });
    } else {
      localStorage.setItem("recipeData", JSON.stringify([...Data]));
      dataDispatch({ type: "INITIALIZE_DATA", payload: Data });
    }
  }, []);
  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseData = () => useContext(DataContext);
