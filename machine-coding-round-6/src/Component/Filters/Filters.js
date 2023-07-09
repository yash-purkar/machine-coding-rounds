import { UseData } from "../../Context/DataContext";
import "./Filters.css";

export const Filters = () => {
  const { dataDispatch } = UseData();

  const handleCuisineClick = (id) => {
    dataDispatch({ type: "SET_CUISINE_ID", payload: id });
  };
  const {
    dataState: { cuisinesData }
  } = UseData();
  return (
    <div>
      <h2 className="cuisine-heading">Select Your Cuisine</h2>
      <div className="cuisines-box">
        {cuisinesData?.map((el) => (
          <button
            key={el?.id}
            onClick={() => handleCuisineClick(el?.id)}
            className="cuisine-btn"
          >
            {el?.name}
          </button>
        ))}
      </div>
    </div>
  );
};
