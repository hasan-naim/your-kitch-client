import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";

function LoginForm({ where }) {
  const { logIn, googleLogIn } = useContext(AuthContext);

  const [inputText, setInputText] = useState({
    email: "",
    pass: "",
  });
  const [btnState, setBtnState] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState(true);

    logIn(inputText.email, inputText.pass)
      .then((res) => {
        setInputText({
          email: "",
          pass: "",
        });
        toast.success("You are loged in now!");
        navigate(...where);
        setBtnState(false);
      })
      .catch((err) => {
        setBtnState(false);
        toast.error(err.message);
      });
  };

  const handleGoogleLogIn = () => {
    setBtnState(true);
    googleLogIn()
      .then((res) => {
        setBtnState(false);
        navigate(...where);
        toast.success("You are loged in now!.");
      })
      .catch((err) => {
        setBtnState(false);

        toast.error(err.message);
      });
  };

  return (
    <>
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
        onClick={handleGoogleLogIn}
        className="mt-8 btn-block btn btn-outline btn-success text-success"
      >
        GOOGLE
      </button>
    </>
  );
}

export default LoginForm;
