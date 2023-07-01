import { useEffect, useState } from "react";
import { UseData } from "../../Context/DataContext";
import "./RecipeForm.css";
export const RecipeForm = ({ setShowModal }) => {
  const {
    dataState: { data, itemIdToBeEdit }
  } = UseData();
  const [newData, setNewData] = useState({
    id: data?.length + 1,
    name: "",
    img: "",
    cuisineType: "",
    ingredients: "",
    instructions: ""
  });
  const { name, img, cuisineType, ingredients, instructions } = newData || {};
  const { dataDispatch } = UseData();

  useEffect(() => {
    if (itemIdToBeEdit) {
      const ItemToBeEdit = data?.find((item) => item.id === itemIdToBeEdit);
      setNewData({
        ...ItemToBeEdit,
        ingredients: ItemToBeEdit?.ingredients.toString(),
        instructions: ItemToBeEdit?.instructions.toString()
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const ingredientsToArr = ingredients?.split(",");
    const instructionsToArr = instructions?.split(",");

    if (name && cuisineType && ingredients && instructions) {
      if (itemIdToBeEdit) {
        const updatedData = data?.map((item) =>
          item?.id === itemIdToBeEdit
            ? {
                ...newData,
                ingredients: ingredientsToArr,
                instructions: instructionsToArr
              }
            : item
        );
        dataDispatch({ type: "DATA_OPERATIONS", payload: updatedData });

        localStorage.setItem("recipeData", JSON.stringify([...updatedData]));
      } else {
        dataDispatch({
          type: "ADD_NEW_RECIPE",
          payload: {
            ...newData,
            ingredients: ingredientsToArr,
            instructions: instructionsToArr
          }
        });
        const prevData = JSON.parse(localStorage.getItem("recipeData"));

        localStorage.setItem(
          "recipeData",
          JSON.stringify([...prevData, newData])
        );
      }
      setShowModal(false);
    } else {
      console.log("Fill the data");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="name"
        placeholder="Recipe Name"
        onChange={handleChange}
        value={name}
      />
      <input
        type="text"
        placeholder="Cusine Type"
        name="cuisineType"
        onChange={handleChange}
        value={cuisineType}
      />
      <input
        type="text"
        placeholder="Recipe Image Url"
        onChange={handleChange}
        name="img"
        value={img}
      />
      <textarea
        placeholder="Ingredients"
        className="textarea"
        onChange={handleChange}
        name="ingredients"
        value={ingredients}
      />
      <textarea
        placeholder="Instructions"
        className="textarea"
        onChange={handleChange}
        name="instructions"
        value={instructions}
      />
      <button className="add-new">Add </button>
      <button onClick={() => setShowModal(false)} className="cancel">
        Cancel
      </button>
    </form>
  );
};
