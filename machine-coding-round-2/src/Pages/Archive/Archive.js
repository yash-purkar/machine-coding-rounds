import { SingleHabit } from "../../Components/SingleHabit/SingleHabit";
import { UseData } from "../../Contexts/DataContext";
import { NavLink } from "react-router-dom";

export const Archive = () => {
  const {
    dataState: { archived }
  } = UseData();
  return (
    <div>
      <NavLink to="/">Go Back</NavLink>
      {archived?.map((habit, i) => (
        <SingleHabit key={i} habit={habit} />
      ))}
    </div>
  );
};
