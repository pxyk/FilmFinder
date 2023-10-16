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
    dispatch(fetchPopularMoviesAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>Popular Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <li key={movie.id}>
                <Link href={`/movie/${movie.id}`}>
                  <h2>{movie.title}</h2>
                  {movie.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={`${movie.title} Poster`}
                      width={250}
                      height={375}
                      loading="lazy"
                    />
                  )}
                  <p>Release Date: {movie.release_date}</p>
                  <p>Vote Average: {movie.vote_average}</p>
                </Link>
              </li>
            ))
          ) : (
            <p>No movies available.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default PopularMovies;
