import { fetchPopularMovies } from "./api/popularapi";
import { useState, useEffect } from "react";

const YourComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getPopularMoviesData = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data.results); // Assuming data has a 'results' property containing movie data
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    getPopularMoviesData();
  }, []); // Empty dependency array to run this effect once when component mounts

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
