import React from "react";

const Navbar = () => {
  return (
    // Navbar container with styling
    <nav className="flex flex-row justify-between items-center w-full my-3 border-b border-red-800 pb-4 sm:px-2 px-1 gap-2">
      {/* Logo section */}
      <h1 className="sm:text-5xl text-4xl font-bold tracking-tight cursor-pointer bg-gradient-to-r from-red-500 to-red-900 text-transparent bg-clip-text rounded-md px-4 py-1">
        <a href="/">FilmFinder</a>
      </h1>

      {/* Sign In and Register section */}
      <div className="flex items-center space-x-2">
        {/* Sign In link */}
        <span className="text-red-600 cursor-pointer">Sign In</span>

        {/* Register button */}
        <div className="cursor-pointer bg-red-800 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base md:mt-0 transition duration-300 ease-in-out">
          Register
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
