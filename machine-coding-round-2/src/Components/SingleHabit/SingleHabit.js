import { UseData } from "../../Contexts/DataContext";
import "./SingleHabit.css";
export const SingleHabit = ({ habit }) => {
  const { name, repeat, goal, timeOfDay, startDate } = habit;
  const { dataDispatch } = UseData();
  const handleClick = (habit) => {
    dataDispatch({ type: "SET_HABIT_TO_OPEN", payload: habit });
    dataDispatch({ type: "SHOW_HABIT_MODAL" });
  };

  return (
    <div>
      <div className="habitCard" onClick={() => handleClick(habit)}>
        <h2 className="habit-name">{name}</h2>
      </div>
    </div>
  );
};
