import "./ReviewCard.css";
import { AiFillStar } from "react-icons/ai";

export const ReviewCard = ({ data }) => {
  return (
    <div className="review-card">
      <div className="review-card-inner">
        <div className="profile-name-img">
          <img src={data?.pp} alt={data?.revName} className="profile-img" />
          <p className="review-name">{data?.revName}</p>
        </div>
        <p className="review-stars">
          <span>{data?.rating}</span> <AiFillStar className="star" />
        </p>
      </div>
      <p className="review-comment">{data?.comment}</p>
    </div>
  );
};
