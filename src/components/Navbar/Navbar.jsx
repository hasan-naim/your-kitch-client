import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/cookie.png";
function Navbar() {
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/meals"}>Meals</Link>
      </li>
    </>
  );

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
              className="translate-y-0 flex duration-300 h-full hover:bg-white hover:-translate-y-2 hover:cursor-pointer normal-case text-xl"
            >
              <img className="w-10 mr-2 md:mr-2" src={logo} alt="" />
              <h1 className="text-2xl cursor-pointer font-bold md:text-3xl lg:text-3xl">
                Your Kitch
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-2">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary text-white">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
