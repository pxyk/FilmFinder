import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { searchMovies } from "@/api/search/moviesearchapi";
import Pagination from "@/components/Pagination";

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
    return <p className="text-white">Loading...</p>;
  }

  if (movies.length === 0) {
    return <p className="text-white">No movies found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl text-red-500 font-bold mb-2">Movies</h2>
      <p className="mb-2 text-gray-300">Total Results: {totalResults}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <li key={movie.id} className="mb-4">
            <Link href={`/movie/${movie.id}`}>
              <div className="flex flex-col">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2">
                  <h3 className="text-sm font-bold">{movie.title}</h3>
                  <p className="text-xs text-gray-300">{`Year: ${
                    movie.release_date.split("-")[0]
                  }`}</p>
                </div>
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
