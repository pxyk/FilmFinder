import React from "react";
import Head from "next/head";
import PopularMovies from "@/components/mainPage/PopularMovies";
import SearchBar from "@/components/mainPage/SearchBar";

const index = () => {
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
      <h1>My Movie App</h1>
      <SearchBar />
      <PopularMovies />
    </div>
  );
};
export default index;
