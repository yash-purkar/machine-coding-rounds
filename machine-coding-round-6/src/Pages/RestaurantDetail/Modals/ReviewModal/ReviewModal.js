import "./ReviewModal.css";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import { UseData } from "../../../../Context/DataContext";
export const ReviewModal = ({ setShowReviewModal, restaurantId }) => {
  const [reviewData, setReviewData] = useState({
    rating: null,
    comment: "",
    revName: "Yash Purkar",
    pp: "https://cdn-icons-png.flaticon.com/128/7069/7069922.png"
  });

  const { dataDispatch } = UseData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewData?.rating && reviewData?.comment) {
      dataDispatch({
        type: "ADD_REVIEW",
        payload: { reviewData, restaurantId }
      });
      setShowReviewModal(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div onClick={() => setShowReviewModal(false)} className="cancel-icon">
        <span>
          <MdOutlineCancel />
        </span>
      </div>
      <h2 className="add-review-text">Add Your Review</h2>
      <div className="rating-box">
        <label htmlFor="">Rating: </label>
        <select onChange={handleChange} name="rating" id="">
          <option value={""}>-select rating-</option>
          {[1, 2, 3, 4, 5].map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="comment-box">
        <label htmlFor="">Comment: </label>
        <input onChange={handleChange} name="comment" type="text" />
      </div>
      <div className="btn-box">
        <button className="submit-btn">Submit</button>
      </div>
    </form>
  );
};
