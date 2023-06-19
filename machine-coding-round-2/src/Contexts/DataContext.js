import { createContext, useContext, useReducer } from "react";
import { HabitsData } from "../Data/HabitsData";
import { dataReducer } from "../Reducers/dataReducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    habits: HabitsData,

    selectedHabit: {},
    archived: [],
    showDetailModal: false,
    showForm: false,
    habitIdToBeEdit: null
  });

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseData = () => useContext(DataContext);
