import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { fetchMovieData } from "@/api/movie/movieapi";
import MovieCast from "@/components/movieDetail/MovieCast";
import Title from "@/components/movieDetail/Title";
import Overview from "@/components/movieDetail/Overview";
import MovieVideo from "@/components/movieDetail/MovieVideo";

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) {
        return;
      }

      try {
        const data = await fetchMovieData(id);
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <Head>
        <title>FilmFinder</title>
        <meta
          name="description"
          content="FilmFinder is a dedicated web platform for cinema enthusiasts. Discover the latest movies, create lists of your favorite films, and learn about actors and directors. Step into the world of cinema with FilmFinder and enjoy an immersive movie experience."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Movie Detail Page</h1>
      {movieData && (
        <div>
          <Title
            title={movieData.title}
            posterPath={movieData.poster_path}
            releaseDate={movieData.release_date}
            voteAverage={movieData.vote_average}
            runtime={movieData.runtime}
          />
          <Overview overview={movieData.overview} />
          <MovieCast movieId={id} />
          <MovieVideo movieId={id} />
          {/* Display other movie details as needed */}
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
