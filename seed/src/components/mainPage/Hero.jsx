import React from "react";
import SearchBar from "./SearchBar";
import PopularMovies from "./PopularMovies";

const Hero = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center md:mt-20">
      {/* Hero section title */}
      <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-4 text-center rounded-lg p-4 text-red-300 bg-red-300 bg-opacity-10">
        Discover Your Favorite Movies
      </h1>
      {/* Hero section description */}
      <p className="text-gray-400 text-lg font-light mb-8 text-center">
        Explore a vast collection of movies and find what you love.
      </p>
      {/* SearchBar component */}
      <SearchBar />
      {/* PopularMovies component */}
      <PopularMovies />
    </div>
  );
};

export default Hero;
