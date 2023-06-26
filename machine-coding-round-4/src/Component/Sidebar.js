import { NavLink } from "react-router-dom";
import { UseData } from "../Context/DataContext";

export const Sidebar = () => {
  const {
    dataState: { data }
  } = UseData();
  return (
    <div className="navbar-container">
      <ul className="flex direction-column ">
        <NavLink to="/">Home</NavLink>
        <li>Explore</li>
        <li>Bookmarks</li>
        <li>Profile</li>
      </ul>

      <div className="bottom-user">
        <img
          src="https://pbs.twimg.com/profile_images/1597211549021908994/V2ClCtWn_400x400.jpg"
          alt="user"
          className="user-profile"
        />
        <div>
          <p>{data?.name}</p>
          <p>@{data?.username}</p>
        </div>
      </div>
    </div>
  );
};
