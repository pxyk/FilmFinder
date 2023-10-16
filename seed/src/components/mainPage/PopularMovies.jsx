import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fetchPopularMoviesAsync,
  selectPopularMovies,
} from "@/features/popularSlice";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(selectPopularMovies);

  useEffect(() => {
    // Fetch popular movies on component mount
    dispatch(fetchPopularMoviesAsync());
  }, [dispatch]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-red-500 min-h-screen p-16"
    >
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Popular Now
      </h1>

      {/* Display loading or error messages */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-900 rounded p-6 transform transition flex flex-col"
                >
                  {movie.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={`${movie.title} Poster`}
                      className="w-full h-auto rounded-lg"
                    />
                  )}
                  <div className="mt-4 flex flex-col">
                    <h2 className="text-xl font-semibold mb-2">
                      {movie.title}
                    </h2>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">
                        {movie.release_date}
                      </span>
                      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-red-500 text-white p-2">
                        {movie.vote_average}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))
          ) : (
            <p>No movies available.</p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default PopularMovies;
