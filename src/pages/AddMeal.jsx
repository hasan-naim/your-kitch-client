import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AddMeal() {
  const [inputText, setInputText] = useState({
    desc: "",
    title: "",
    img: "",
    price: "",
  });
  const [btnState, setBtnState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState(true);
    console.log(inputText);

    axios
      .post("https://your-kitch-ph-assignment-11-backend.vercel.app/addmeal", {
        ...inputText,
      })
      .then((res) => {
        if (res.data.result.insertedId) {
          setBtnState(false);
          toast.success("Your meal is successfully added!");
          setInputText({
            ...inputText,
            desc: "",
            title: "",
            img: "",
            price: "",
          });
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="my-12 pt-12">
      <div className="container">
        <div className="w-full max-w-lg bg-white rounded-lg mx-auto p-12">
          <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-8 font-mono">
            Add Meal
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="Email" className="font-medium">
                Title
              </label>
              <input
                value={inputText.title}
                onChange={(e) =>
                  setInputText({ ...inputText, title: e.target.value })
                }
                type="text"
                required
                placeholder="Meal Title"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="Email" className="font-medium">
                Picture URL
              </label>
              <input
                value={inputText.img}
                onChange={(e) =>
                  setInputText({ ...inputText, img: e.target.value })
                }
                type="text"
                placeholder="Only Url"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="password" className="font-medium">
                Price
              </label>
              <input
                value={inputText.price}
                onChange={(e) =>
                  setInputText({ ...inputText, price: e.target.value })
                }
                type="number"
                placeholder="Price"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="Email" className="font-medium">
                Description
              </label>
              <textarea
                value={inputText.desc}
                onChange={(e) =>
                  setInputText({ ...inputText, desc: e.target.value })
                }
                className="textarea bg-white textarea-bordered"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                disabled={btnState}
                className="btn btn-primary btn-block"
                type="submit"
              >
                Add Meal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMeal;
