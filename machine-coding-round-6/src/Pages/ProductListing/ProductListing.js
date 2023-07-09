import { useNavigate } from "react-router-dom";
import { SingleCard } from "../../Component/SingleCard/SingleCard";
import { UseData } from "../../Context/DataContext";
import "./ProductListing.css";
export const ProductListing = () => {
  const {
    dataState: { restaurantsData, selectedCuisineId }
  } = UseData();

  const navigate = useNavigate();

  const transformData = () => {
    let filteredData = [...restaurantsData];
    if (selectedCuisineId) {
      filteredData = filteredData?.filter(
        (el) => el?.cuisine_id === selectedCuisineId
      );
    }

    return filteredData;
  };

  const handleClick = (id) => {
    navigate(`/restaurant/${id}`);
  };
  return (
    <div className="productlisting-main">
      <div>
        {transformData()?.map((el) => {
          return (
            <div key={el?.id} className="single-restaurant-container">
              <h1
                onClick={() => handleClick(el?.id)}
                className="restaurant-name"
              >
                Dishes By {el?.name}
              </h1>
              <div className="restaurant-box">
                {el?.menu?.map((item, i) => (
                  <SingleCard
                    key={i}
                    data={item}
                    restaurantName={el?.name}
                    restaurantId={el?.id}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
