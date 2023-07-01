import { useNavigate, useParams } from "react-router-dom";
import { UseData } from "../../Context/DataContext";
import "./RecipeDetail.css";

export const RecipeDetail = () => {
  const { id } = useParams();
  const {
    dataState: { data }
  } = UseData();
  const navigate = useNavigate();
  const foundRecipe = data?.find((el) => Number(el?.id === Number(id)));
  return (
    <div className="recipe-detail-main">
      <h2 className="text-center margin-05">{foundRecipe?.name}</h2>
      <div className="recipe-detail-inner">
        <div>
          <img
            src={foundRecipe?.img}
            alt={foundRecipe?.name}
            className="detail-img"
          />
        </div>
        <div>
          <h4 className="margin-05">Cuisine : {foundRecipe?.cuisineType}</h4>
          <div className="margin-05">
            <h4>Ingredients : </h4>
            {foundRecipe?.ingredients?.map((el) => (
              <span key={el}>{el},</span>
            ))}
          </div>
          <div className="margin-05">
            <h4>Instructions : </h4>
            <ol>
              {foundRecipe?.instructions?.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/")} className="go-to-home">
        Go To Homepage
      </button>
    </div>
  );
};
