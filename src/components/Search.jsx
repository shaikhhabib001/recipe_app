import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalState } from "./GlobalContext";

function Search() {
  const { searchParams, setSearchParams, fetchData } = useContext(GlobalState);

  const onFormSubmit = (elem) => {
    elem.preventDefault();
    fetchData();
  };

  return (
    <div>
      <div className="container mx-auto flex justify-between py-8 align-middle">
        <div className="logo">
          <h2 className="text-2xl font-bold">Recipe App</h2>
        </div>
        <div className="search">
          <form onSubmit={(e) => onFormSubmit(e)}>
            <input
              value={searchParams}
              onChange={(e) => setSearchParams(e.target.value)}
              placeholder="Search Here"
              className="outline-none border-none py-4 bg-white/75 shadow-lg shadow-red-200 hover:shadow-red-300 duration-300 p-6 rounded-full lg:w-96"
            />
          </form>
        </div>
        <div className="nav ">
          <ul className="flex gap-3">
            <li>
              <NavLink
                className={
                  "text-black hover:text-gray-800 duration-300 text-xl"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  "text-black hover:text-gray-800 duration-300 text-xl"
                }
                to={"/favourites"}
              >
                Favourites
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;
