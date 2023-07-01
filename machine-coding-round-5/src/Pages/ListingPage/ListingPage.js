import { useState } from "react";
import { RecipeForm } from "../../Component/RecipeForm/RecipeForm";
import { SingleRecipe } from "../../Component/SingleRecipe/SingleRecipe";
import { UseData } from "../../Context/DataContext";
import "./ListingPage.css";

export const ListingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    dataState: { data }
  } = UseData();
  const [searchValue, setSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState("name");

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  const transformData = () => {
    let filteredData = data;
    if (searchValue) {
      if (filterBy === "ingredients") {
        filteredData = filteredData?.filter((el) =>
          el?.ingredients?.some((el) =>
            el?.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      } else {
        filteredData = filteredData?.filter((el) =>
          el[filterBy]?.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
    }

    return filteredData;
  };

  return (
    <div>
      <div>
        <input type="search" onChange={(e) => setSearchValue(e.target.value)} />
        <label> Filters: </label>
        <input
          type="radio"
          onChange={handleFilterChange}
          value="name"
          checked={filterBy === "name"}
        />
        Name
        <input
          type="radio"
          onChange={handleFilterChange}
          value="ingredients"
          checked={filterBy === "ingredients"}
        />
        Ingredients
        <input
          type="radio"
          onChange={handleFilterChange}
          value="cuisineType"
          checked={filterBy === "cuisineType"}
        />
        Cuisine
      </div>
      <button onClick={() => setShowModal(true)} className="add-new">
        {" "}
        Add new Recipe
      </button>
      <div className="recipies-container">
        {transformData()?.map((recipe, i) => (
          <SingleRecipe recipe={recipe} key={i} setShowModal={setShowModal} />
        ))}
      </div>
      {showModal && (
        <div className="form-in-listing">
          <RecipeForm setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
};
