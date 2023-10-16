import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
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

  return (
    <div className="text-red-500 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Popular Movies</h1>

      {/* Display loading or error messages */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <div className="bg-gray-900 rounded p-6 transform transition hover:scale-110">
                  {movie.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={`${movie.title} Poster`}
                      className="w-full h-auto rounded-lg"
                    />
                  )}
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {movie.title}
                    </h2>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">
                        {movie.release_date}
                      </span>
                      <div className="rounded-full bg-red-500 text-white p-2">
                        {movie.vote_average}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No movies available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PopularMovies;
