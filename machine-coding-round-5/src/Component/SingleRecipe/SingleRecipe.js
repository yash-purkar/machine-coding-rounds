import "./SingleRecipe.css";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { UseData } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

export const SingleRecipe = ({ recipe, setShowModal }) => {
  const {
    dataState: { data },
    dataDispatch
  } = UseData();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    dataDispatch({ type: "EDIT_RECIPE", payload: id });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const updatedData = data?.filter((item) => item.id !== id);
    dataDispatch({ type: "DATA_OPERATIONS", payload: updatedData });

    localStorage.setItem("recipeData", JSON.stringify([...updatedData]));
  };

  const handleViewDetails = (id) => {
    navigate(`/recipe/${id}`);
  };
  return (
    <div className="recipe-card">
      <img
        src={recipe?.img ? recipe?.img : "https://picsum.photos/200/300"}
        alt={recipe?.name}
        className="recipe-img"
      />
      <h2 className="recipe-name">{recipe?.name}</h2>
      <div>
        <h4 className="cuisine-type margin-05">
          Cuisine Type : {recipe?.cuisineType}
        </h4>
        <h4 className="margin-05">
          Ingredients :{" "}
          <button
            onClick={() => handleViewDetails(recipe?.id)}
            className="see-btn"
          >
            See Recipe &gt;
          </button>
        </h4>
        <h4>
          Instructions :{" "}
          <button
            onClick={() => handleViewDetails(recipe?.id)}
            className="see-btn"
          >
            See Recipe &gt;
          </button>
        </h4>
      </div>
      <div className="buttons-box">
        <button
          className="button edit-btn"
          onClick={() => handleEdit(recipe?.id)}
        >
          <FiEdit />
        </button>
        <button
          onClick={() => handleDelete(recipe?.id)}
          className="button delete-btn"
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};
