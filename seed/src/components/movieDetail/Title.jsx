import React from "react";

const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

const Title = ({ title, posterPath, releaseDate, voteAverage, runtime }) => {
  const votePercentage = Math.round(voteAverage * 10);

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  const formattedReleaseDate = formatDate(releaseDate);

  return (
    <div>
      <h2>{title}</h2>
      {posterPath && (
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={`${title} Poster`}
          width={250}
          height={375}
        />
      )}
      <p>Release Date: {formattedReleaseDate}</p>
      <p>Vote Average: {votePercentage}%</p>
      <p>
        Runtime: {hours}h {minutes}m
      </p>
    </div>
  );
};

export default Title;
