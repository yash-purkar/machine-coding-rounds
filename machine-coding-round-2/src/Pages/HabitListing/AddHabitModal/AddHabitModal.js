import { useEffect, useState } from "react";
import { UseData } from "../../../Contexts/DataContext";
import "./AddHabitModal.css";
import { v4 as uuid } from "uuid";
export const AddHabitModal = () => {
  const {
    dataState: { habits, habitIdToBeEdit }
  } = UseData();

  const [newHabitData, setNewHabitData] = useState({});

  const { dataDispatch } = UseData();

  const { name, repeat, goal, timeOfDay, startDate } = newHabitData || {};

  useEffect(() => {
    const foundHabit = habits?.find((el) => el.id === habitIdToBeEdit);
    setNewHabitData(
      foundHabit?.id
        ? foundHabit
        : {
            name: "",
            repeat: "Daily",
            goal: "1 time daily",
            timeOfDay: "Any Time",
            startDate: "Today",
            id: habitIdToBeEdit ? habitIdToBeEdit : uuid()
          }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHabitData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dataDispatch({ type: "ADD_NEW_HABIT", payload: newHabitData });
    dataDispatch({ type: "HIDE_HABIT_MODAL" });
  };

  const handleReset = () => {
    setNewHabitData({
      name: "",
      repeat: "Daily",
      goal: "1 time daily",
      timeOfDay: "Any Time",
      startDate: "Today"
    });
    dataDispatch({ type: "HIDE_HABIT_MODAL" });
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>New Habit</h3>
        <label className="habit-name-box">
          <span>Name*</span>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            required
            className="input-name"
          />
        </label>

        <div className="select-box">
          <label>
            <span>Repeat</span>
            <select name="repeat" onChange={handleChange} value={repeat}>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </label>

          <label>
            <span>Goal</span>
            <select name="goal" onChange={handleChange} value={goal}>
              <option value="1 time daily">1 time daily</option>
              <option value="2 times daily">2 times daily</option>
              <option value="3 times daily">3 times daily</option>
              <option value="4 times daily">4 times daily</option>
              <option value="5 times daily">5 times daily</option>
            </select>
          </label>
        </div>

        <div className="select-box">
          <label>
            <span>Time of a day</span>
            <select name="timeOfDay" onChange={handleChange} value={timeOfDay}>
              <option value="any time">Any Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
          </label>

          <label>
            <span>Start Date</span>
            <select name="startDate" onChange={handleChange} value={startDate}>
              <option value="today">Today</option>
              <option value="tommorow">Tomorrow</option>
              <option value="day after tomorrow">Day After Tomorrow</option>
            </select>
          </label>
        </div>

        <div className="btn-box">
          <input type="reset" onClick={handleReset} />
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};
