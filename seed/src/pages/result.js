import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import MovieResults from "@/components/searchResults/MovieResults";
import PersonResults from "@/components/searchResults/PersonResults";
import ResultSearchBar from "@/components/searchResults/ResultSearchBar";

const Result = () => {
  const query = useSelector((state) => state.search.query);

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
      <ResultSearchBar />
      <MovieResults />
      <PersonResults />
    </div>
  );
};

export default Result;
