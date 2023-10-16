import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { searchMovies } from "@/api/search/moviesearchapi";
import Pagination from "@/utils/Pagination";

const MovieResults = () => {
  const query = useSelector((state) => state.search.query);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchMovies = async (page) => {
      try {
        if (query) {
          const data = await searchMovies(query, page);
          setMovies(data.results);
          setTotalPages(data.total_pages);
          setTotalResults(data.total_results);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies(currentPage);
  }, [query, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div>
      <h2>Movie Results</h2>
      <p>Query: {query}</p>
      <p>Total Results: {totalResults}</p>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
              </div>
              <div>
                <h3>{movie.title}</h3>
                <p>{`Year: ${movie.release_date.split("-")[0]}`}</p>{" "}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MovieResults;
