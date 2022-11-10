import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { toast } from "react-toastify";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { Helmet } from "react-helmet";
function MyReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [editReview, setEditReview] = useState({});
  const [inputText, setInputText] = useState({
    details: "",
    rating: 5,
  });
  const btnCross = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://your-kitch-ph-assignment-11-backend.vercel.app/reviewsByEmail?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("yourKitchtoken")}`,
          },
        }
      )
      .then((res) => {
        setReviews(res.data.reviews);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(`${err.message} please login again`);
      });
  }, [user]);

  /// handle edit function
  const handleEdit = (id) => {
    axios
      .get(
        `https://your-kitch-ph-assignment-11-backend.vercel.app/reviewtoedit/${id}`
      )
      .then((res) => {
        // console.log(res.data.reviews[0]);
        setEditReview(res.data.review);
        setInputText({
          ...inputText,
          details: res.data.review?.details,
        });
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://your-kitch-ph-assignment-11-backend.vercel.app/reviewsByEmail?id=${id}`
      )
      .then((res) => {
        if (res.data.result.deletedCount) {
          const newReviews = reviews.filter((review) => review._id !== id);
          setReviews(newReviews);
          toast.success("Deleted your review");
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(editReview);
    axios
      .patch(
        `https://your-kitch-ph-assignment-11-backend.vercel.app/editedreview/${editReview._id}`,
        inputText
      )
      .then((res) => {
        if (res.data.result.modifiedCount === 1) {
          const updatedReview = reviews.map((rv) => {
            if (rv._id === editReview._id) {
              rv = {
                ...rv,
                details: inputText.details,
                rating: inputText.rating,
              };
            }

            return rv;
          });

          setReviews(updatedReview);
          toast.success("Your review is updated.");
          btnCross.current.click();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet>
        <title>My Reviews | Your kitch</title>
      </Helmet>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
          <label
            htmlFor="my-modal"
            ref={btnCross}
            className="btn btn-sm w-10 h-10 btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl font-mono">
            Edit
          </h1>

          <form onSubmit={handleEditSubmit}>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="Email" className="font-medium">
                Message
              </label>
              <textarea
                value={inputText?.details}
                onChange={(e) =>
                  setInputText({ ...inputText, details: e.target.value })
                }
                className="textarea bg-white textarea-bordered"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="ratings" className="font-medium">
                Rate
              </label>
              <div className="rating space-x-3">
                <input
                  value={1}
                  onChange={(e) =>
                    setInputText({ ...inputText, rating: e.target.value })
                  }
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  value={2}
                  onChange={(e) =>
                    setInputText({ ...inputText, rating: e.target.value })
                  }
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  value={3}
                  onChange={(e) =>
                    setInputText({ ...inputText, rating: e.target.value })
                  }
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  value={4}
                  onChange={(e) =>
                    setInputText({ ...inputText, rating: e.target.value })
                  }
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  value={5}
                  onChange={(e) =>
                    setInputText({ ...inputText, rating: e.target.value })
                  }
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="btn sm:btn-wide w-20 btn-primary text-white gap-2"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* modal end */}
      <div className="pt-12">
        <div className="container">
          <div className="mt-12">
            <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-14 font-mono">
              My Reviews
            </h1>
            {loading ? (
              <>
                <div className="flex items-center justify-center mb-12">
                  <div role="status">
                    <svg
                      className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {reviews?.length === 0 ? (
                  <>
                    <h3 className="text-center mb-12 font-bold text-gray-400 text-3xl">
                      You didn't review at anything.
                    </h3>
                  </>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-2 mb-12">
                      {reviews.map((review) => (
                        <ReviewCard
                          key={review._id}
                          handleDelete={handleDelete}
                          handleEdit={handleEdit}
                          review={review}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyReviews;
