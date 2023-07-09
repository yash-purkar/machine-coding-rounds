import { createContext, useContext, useEffect, useReducer } from "react";
import { cuisineData, restaurantsData } from "../Data/Data";
import { dataInitialState, dataReducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitialState);

  useEffect(() => {
    dataDispatch({
      type: "INITIALIZE_RESTAURANT_DATA",
      payload: restaurantsData
    });
    dataDispatch({ type: "INITIALIZE_CUISINE_DATA", payload: cuisineData });
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseData = () => useContext(DataContext);
