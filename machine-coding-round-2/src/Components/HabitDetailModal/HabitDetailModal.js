import { UseData } from "../../Contexts/DataContext";
import "./HabitDetailModal.css";

export const HabitDetailModal = () => {
  const {
    dataState: { selectedHabit },
    dataDispatch
  } = UseData();

  // console.log(selectedHabit);
  const { name, repeat, goal, timeOfDay, startDate, id } = selectedHabit;

  const handleAddToArchive = () => {
    dataDispatch({ type: "ADD_TO_ARCHIVE", payload: selectedHabit });
    dataDispatch({ type: "HIDE_HABIT_MODAL" });
  };

  const handleEditClick = () => {
    dataDispatch({
      type: "HABIT_EDIT",
      payload: {
        habitFormData: selectedHabit,
        id
      }
    });
  };

  const handleDeleteHabit = () => {
    dataDispatch({ type: "DELETE_HABIT", payload: selectedHabit });
    dataDispatch({ type: "HIDE_HABIT_MODAL" });
  };

  return (
    <div className="detail-modal-box">
      <div className="detail-modal">
        <h2>Name : {name}</h2>
        <p>Repeat : {repeat} </p>
        <p>Goal : {goal}</p>
        <p>Time of a Day : {timeOfDay}</p>
        <p>Start Date : {startDate} </p>
        <div>
          <button onClick={handleAddToArchive}>Archive</button>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteHabit}>Delete</button>
        </div>
      </div>
    </div>
  );
};
