import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo/cookie.png";
import { AuthContext } from "../../Contexts/AuthProvider";
function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/meals"}>Meals</Link>
      </li>
      <li>
        <Link to={"/myreviews"}>My Reviews</Link>
      </li>
      <li>
        <Link to={"/addmeal"}>Add Meal</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        toast.success("You are successfully loged out!");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="bg-white">
      <div className="container">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 space-y-1"
              >
                {navItems}
              </ul>
            </div>
            <Link
              to={"/"}
              className="translate-y-0 flex items-center duration-300 h-full hover:bg-white hover:-translate-y-2 hover:cursor-pointer normal-case text-xl"
            >
              <img className="w-10 mr-2 md:mr-2" src={logo} alt="" />
              <h1 className="text-xl cursor-pointer font-bold md:text-3xl lg:text-3xl font-mono">
                Your Kitch
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-2">{navItems}</ul>
          </div>
          <div className="navbar-end space-x-4">
            {user ? (
              <>
                {user?.photoURL ? (
                  <>
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">
                          {user?.displayName?.slice(0, 1)}
                        </span>
                      </div>
                    </div>
                  </>
                )}
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline btn-secondary"
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link to={"/login"} className="btn btn-primary text-white">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
