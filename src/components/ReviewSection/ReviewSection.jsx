import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import Login from "../../pages/Login";
import LoginForm from "../LoginForm/LoginForm";
import MealReview from "../MealReview/MealReview";
import ReviewForm from "../ReviewForm/ReviewForm";

function ReviewSection({ mealId }) {
  const [usr, setUsr] = useState({});
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/reviewsById/${mealId}`).then((res) => {
      if (res.data.status === 400) {
        setReviews(res.data.reviews);
      }
    });
  }, []);

  const handleAdd = (data) => {
    setReviews([...reviews, data]);
  };

  useEffect(() => {
    setUsr(user);
  }, [user]);

  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-white" htmlFor="">
          <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl font-mono">
            Login
          </h1>
          <LoginForm where={[""]} />
        </label>
      </label>
      <div className="mt-12">
        <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-14 font-mono">
          Reviews
        </h1>
        {/* showing reviews */}
        {reviews.length > 0 ? (
          <div className="mb-12 grid lg:grid-cols-2 gap-2">
            {reviews.map((review) => (
              <MealReview key={review._id} review={review} />
            ))}
          </div>
        ) : (
          <>
            <h3 className="text-center mb-12 font-bold text-gray-400 text-3xl">
              There is no review
            </h3>
          </>
        )}

        {/* form */}
        <div className="bg-white max-w-xl mx-auto p-10 rounded-lg">
          <h3 className="text-2xl text-center font-medium  mb-6">Add Review</h3>
          {usr ? (
            <>
              <ReviewForm user={user} mealId={mealId} handleAdd={handleAdd} />
            </>
          ) : (
            <>
              <div className="text-center">
                <label
                  htmlFor="my-modal-4"
                  className="btn btn-primary gap-2 mx-auto"
                >
                  Login
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </label>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
