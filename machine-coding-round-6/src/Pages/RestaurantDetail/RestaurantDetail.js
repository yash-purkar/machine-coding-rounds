import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { UseData } from "../../Context/DataContext";
import { ReviewModal } from "./Modals/ReviewModal/ReviewModal";
import "./RestaurantDetail.css";
import { ReviewCard } from "./ReviewCard/ReviewCard";

export const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    dataState: { restaurantsData }
  } = UseData();

  const [showReviewModal, setShowReviewModal] = useState();

  const foundRestaurant = restaurantsData?.find((el) => el?.id === Number(id));

  return (
    <div className="detail-container">
      <div className="back-box">
        <button onClick={() => navigate("/")} className="back-btn">
          <MdArrowBack />
        </button>
      </div>
      <div className="detail-inner-container">
        <div className="detail-header">
          <div>
            <h2 className="detail-restaurant-name">{foundRestaurant?.name}</h2>
            <div className="restaurant-menus">
              {foundRestaurant?.menu?.map((el, i) => (
                <span key={i}>{el?.name}, </span>
              ))}
            </div>
            <p className="detail-address">{foundRestaurant?.address}</p>
            <p className="detail-phone">Phone - {foundRestaurant?.phone}</p>
          </div>
          <div>
            <button
              onClick={() => setShowReviewModal(true)}
              className="review-btn"
            >
              Review
            </button>
          </div>
        </div>

        <div>
          <h2 className="review-text">Reviews</h2>
          {foundRestaurant?.ratings?.map((el, i) => (
            <ReviewCard data={el} key={i} />
          ))}
        </div>
      </div>
      {showReviewModal && (
        <div className="modal-box">
          <ReviewModal
            setShowReviewModal={setShowReviewModal}
            restaurantId={foundRestaurant?.id}
          />
        </div>
      )}
    </div>
  );
};
