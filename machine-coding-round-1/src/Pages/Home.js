import { NavLink } from "react-router-dom";
import { Categories } from "../Component/Categories/Categories";

export const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <NavLink to="/search">Search book</NavLink>
      </div>
      <Categories />
    </div>
  );
};
