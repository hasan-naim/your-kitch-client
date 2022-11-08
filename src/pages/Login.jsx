import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [inputText, setInputText] = useState({
    email: "",
    pass: "",
  });
  const [btnState, setBtnState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState(true);
  };

  return (
    <div className="my-12">
      <div className="container">
        <div className="w-full max-w-lg bg-white rounded-lg mx-auto p-12">
          <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-8 font-mono">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
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
              New Here?{" "}
              <Link to={"/signup"} className="text-primary hover:underline">
                {" "}
                Create an Accout.{" "}
              </Link>
            </div>
            <div className="mt-6">
              <button
                disabled={btnState}
                className="btn btn-primary btn-block"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <button
            disabled={btnState}
            className="mt-8 btn-block btn btn-outline btn-success text-success"
          >
            GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;