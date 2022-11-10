import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";

function ReviewForm({ mealId, handleAdd }) {
  const { user } = useContext(AuthContext);
  const [inputText, setInputText] = useState({
    details: "",
    rating: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      mealId: mealId,
      details: inputText.details,
      rating: inputText.rating,
      email: user?.email,
      name: user?.displayName,
      img: user.photoURL,
    };
    axios
      .post(
        "https://your-kitch-ph-assignment-11-backend.vercel.app/review/post",
        data
      )
      .then((res) => {
        if (res.data.insertedId) {
          handleAdd(data);
          setInputText({
            ...inputText,
            details: "",
          });
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mt-4">
          <label htmlFor="Email" className="font-medium">
            Message
          </label>
          <textarea
            value={inputText.details}
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
