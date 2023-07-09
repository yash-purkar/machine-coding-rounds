import { useNavigate } from "react-router-dom";
import "./SingleCard.css";
export const SingleCard = ({ data, restaurantName, restaurantId }) => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div onClick={() => handleDetailClick(restaurantId)} className="card">
      <img src={data?.imgSrc} alt="img" className="card-img" />
      <h2>{data?.name}</h2>
      <p>
        Rs.{data?.price} for {data?.qty}
      </p>
      <p className="desc">{restaurantName}</p>
    </div>
  );
};
