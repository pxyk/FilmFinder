import React from "react";

const Navbar = () => {
    return (
      <nav className="flex flex-row justify-between items-center w-full mt-3 border-b pb-4 sm:px-2 px-1 border-gray-700 gap-2">
        <h1 className="sm:text-5xl text-4xl font-bold tracking-tight cursor-pointer bg-gradient-to-r from-red-500 to-red-900 text-transparent bg-clip-text rounded-md px-4 py-1">
          FilmFinder
        </h1>
        <div className="flex space-x-4 cursor-pointer text-red-500 rounded-xl p-1 border-solid border-2 border-red-700">
          Login / Register
        </div>
      </nav>
    );
  };
  
  export default Navbar;