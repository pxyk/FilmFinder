import React from "react";
import { motion } from "framer-motion";

const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

const MovieInfo = ({
  title,
  posterPath,
  releaseDate,
  voteAverage,
  runtime,
  overview,
  genres,
}) => {
  const votePercentage = Math.round(voteAverage * 10);
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const formattedReleaseDate = formatDate(releaseDate);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col md:flex-row bg-gray-800 text-white rounded-lg p-6 shadow-lg"
    >
      {posterPath && (
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={`${title} Poster`}
          className="w-64 h-auto mb-4 md:mr-6 rounded-lg mx-auto md:mx-0"
        />
      )}
      <div className="flex flex-col flex-grow">
        <h2 className="text-4xl font-bold mt-8 mb-4">{title}</h2>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <p className="text-gray-400 hover:text-gray-200 mb-2 md:mr-4">
            {hours}h {minutes}m
          </p>
          <p className="text-gray-400 hover:text-gray-200 mb-2 md:mr-4">
            {genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="text-gray-400 hover:text-gray-200 mb-2">
            {formattedReleaseDate}
          </p>
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-4">
          <p className="text-xl font-bold">{votePercentage}%</p>
        </div>
        <p className="text-gray-400 hover:text-gray-100">{overview}</p>
      </div>
    </motion.div>
  );
};

export default MovieInfo;
