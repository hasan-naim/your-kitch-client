import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthProvider";

function AddMeal() {
  const [inputText, setInputText] = useState({
    email: "",
    name: "",
    img: "",
    pass: "",
  });
  const [btnState, setBtnState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState(true);
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
                value={inputText.name}
                onChange={(e) =>
                  setInputText({ ...inputText, name: e.target.value })
                }
                type="text"
                required
                placeholder="Meal Title"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="Email" className="font-medium">
                Profile Picture
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
              <label htmlFor="Email" className="font-medium">
                Email
              </label>
              <input
                value={inputText.email}
                onChange={(e) =>
                  setInputText({ ...inputText, email: e.target.value })
                }
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                value={inputText.pass}
                onChange={(e) =>
                  setInputText({ ...inputText, pass: e.target.value })
                }
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full bg-white"
              />
            </div>
            <div className="mt-2 text-sm">
              Already Have an account?{" "}
              <Link to={"/login"} className="text-primary hover:underline">
                {" "}
                Login.{" "}
              </Link>
            </div>
            <div className="mt-6">
              <button
                disabled={btnState}
                className="btn btn-primary btn-block"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMeal;
