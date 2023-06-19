import { HabitDetailModal } from "../../Components/HabitDetailModal/HabitDetailModal";
import { SingleHabit } from "../../Components/SingleHabit/SingleHabit";
import { UseData } from "../../Contexts/DataContext";
import { AddHabitModal } from "./AddHabitModal/AddHabitModal";
import "./HabitListing.css";
import { NavLink } from "react-router-dom";
export const HabitListing = () => {
  const {
    dataState: { habits, showDetailModal, showForm },
    dataDispatch
  } = UseData();
  console.log("hi");

  return (
    <>
      <NavLink to="/archive">Archived</NavLink>
      <div className="habits-container">
        <div className="habitCard">
          <h2
            onClick={() => dataDispatch({ type: "SHOW_FORM" })}
            className="habit-name"
          >
            Create My Own
          </h2>
        </div>
        {[...habits]?.reverse().map((habit) => (
          <SingleHabit key={habit?.name} habit={habit} />
        ))}
      </div>
      {showDetailModal && <HabitDetailModal />}
      {showForm && <AddHabitModal />}
    </>
  );
};
