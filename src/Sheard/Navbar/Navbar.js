import React from "react";
import { Link } from "react-router-dom";
import './Navebar.css'

const Navbar = () => {

  return (
    <div>
      <div className="navbar bg-blue-900 text-white">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              


            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl p-0 company-name font-bold"><span className="text-3xl font-sans text-">S</span>ECQUR<span className="text-2xl text-red-500">AI</span>SE </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             

          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle mr-0 lg:mr-20">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          
          <button className="bg-lime-500 px-6 py-2 mr-2 text-black font-semibold">25</button>
          <button className="bg-red-500 px-6 py-2 font-semibold">25</button>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
